import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TemplateLoaderService implements OnDestroy {

  private _templatesCache = new Map<string, BehaviorSubject<string | undefined>>();

  constructor(
    private _httpClient: HttpClient
  ) { }

  getTemplate(url: string): Observable<string | undefined> {
    if (this._templatesCache.has(url)) {
      return this._templatesCache.get(url)!;
    }

    const result$ = new BehaviorSubject<string | undefined>(undefined);

    const nocache = new Date().getTime()
    this._httpClient.get(`${url}?nocache=${nocache}`, {responseType: 'text'}).subscribe({
      next: v => result$.next(v),
      error: e => {
        console.error(e);
        result$.next('error')
      }
    });

    this._templatesCache.set(url, result$);

    return result$;
  }

  ngOnDestroy(): void {
    this._templatesCache.forEach(x => x.complete());
  }


}
