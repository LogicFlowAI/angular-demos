import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, filter, Subject, switchMap, takeUntil} from "rxjs";
import {TemplateLoaderService} from "../../services/template-loader.service";

@Component({
  selector: 'app-template-render',
  templateUrl: './template-render.component.html',
  styleUrls: ['./template-render.component.scss']
})
export class TemplateRenderComponent implements OnInit, OnDestroy {

  private _templateUrl$ = new BehaviorSubject<string | undefined>(undefined);
  private _terminator$ = new Subject();

  get templateUrl(): string | undefined {
    return this._templateUrl$.value;
  }

  @Input() set templateUrl(value: string | undefined) {
    if (value === this.templateUrl) {
      return;
    }
    this._templateUrl$.next(value);
  }

  inProgress: boolean = false;
  isError: boolean = false;

  @Input() context: any;

  @ViewChild('content')
  content!: ElementRef;

  constructor(
    private _templateLoader: TemplateLoaderService,
  ) { }

  private assignContext(): void {
    const info = this.content.nativeElement.querySelector('info-element');
    const tooltip = this.content.nativeElement.querySelector('i-tooltip');
    if (info) {
      info.data = this.context;
    }
    if (tooltip) {
      tooltip.data = this.context;
    }
  }

  ngOnInit(): void {
    this._templateUrl$
      .pipe(
        filter(url => !!url),
        switchMap(url => this._templateLoader.getTemplate(url as string)),
        takeUntil(this._terminator$)
      )
      .subscribe(value => {
        this.inProgress = !value;
        this.isError = value === 'error';
        if (!this.isError && !this.inProgress) {
          this.content.nativeElement.innerHTML = value;
          this.assignContext();
        }
      });
  }

  ngOnDestroy(): void {
    this._templateUrl$.complete();
    this._terminator$.next({});
    this._terminator$.complete();
  }

}
