import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PluginCommonService {

  constructor() {
    console.log('PLUGIN COMMON SERVICE CREATED');
  }

  showMessage(message: string): void {
    alert(message);
  }
}
