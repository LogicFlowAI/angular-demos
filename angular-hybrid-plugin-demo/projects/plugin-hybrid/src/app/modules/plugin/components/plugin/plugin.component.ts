import { Component, OnInit } from '@angular/core';
import {downgradeComponent} from "@angular/upgrade/static";
import {pluginHybrid} from "../../share";
import {NotifierService} from "@shared";

@Component({
  selector: 'plg-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent {

  constructor(
    private _notifier: NotifierService,
  ) { }

  title: string = 'Hybrid plugin';

  message: string = '';

  notify(): void {
    this._notifier.notify('Hello from Hybrid plugin');
  }

}

pluginHybrid.directive('plgPluginDowngraded', downgradeComponent({component: PluginComponent}));
