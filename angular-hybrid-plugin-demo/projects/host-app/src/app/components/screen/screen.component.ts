import { Component } from '@angular/core';
import {downgradeComponent, getAngularJSGlobal} from "@angular/upgrade/static";
import {NotifierService} from "@shared";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {

  constructor(
    private _notifier: NotifierService
  ) {
  }

  title: string = 'Angular 2+ screen';

  message: string = '';

  notify(): void {
    this._notifier.notify('Hello from Angular 2+ screen');
  }

}

getAngularJSGlobal().module('hostApp').directive('appScreen', downgradeComponent({component: ScreenComponent}));
