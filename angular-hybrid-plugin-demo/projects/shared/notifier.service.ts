import { Injectable } from '@angular/core';
import {downgradeInjectable, getAngularJSGlobal} from "@angular/upgrade/static";

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor() {
    console.log('NOTIFIER SERVICE');
  }
  notify(message: string): void {
    console.log('call from upgraded service')
    alert(message);
  }
}

getAngularJSGlobal().module('core').service('notifier', downgradeInjectable(NotifierService));
