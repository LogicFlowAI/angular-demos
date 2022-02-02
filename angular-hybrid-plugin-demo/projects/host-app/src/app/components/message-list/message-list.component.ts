import { Component } from '@angular/core';
import {MessageCollector} from "../../../../../shared/message-collector.provider";
import {downgradeComponent, getAngularJSGlobal} from "@angular/upgrade/static";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {

  constructor(
    public collector: MessageCollector
  ) { }
}

getAngularJSGlobal().module('hostApp').directive('appMessageList', downgradeComponent({component: MessageListComponent}));
