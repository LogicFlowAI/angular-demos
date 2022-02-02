import { Component } from '@angular/core';
import {downgradeComponent} from "@angular/upgrade/static";
import {pluginHybrid} from "./modules/plugin/share";

@Component({
  selector: 'plg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plugin-hybrid';
}

pluginHybrid.directive('plgjsRoot', downgradeComponent({component: AppComponent}));
