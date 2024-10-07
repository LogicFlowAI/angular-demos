import {Component, inject} from '@angular/core';
import {PluginCommonService} from 'plugin-core';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent {

  private _pluginCommon = inject(PluginCommonService);

  notify(): void {
    this._pluginCommon.showMessage('Message from Plugin 2');
  }
}
