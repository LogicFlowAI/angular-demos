import {Component, inject, Injector, viewChild, ViewContainerRef} from '@angular/core';
import {PluginCommonService, PluginCoreService} from 'plugin-core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _pluginCommon = inject(PluginCommonService);
  private _pluginCore = inject(PluginCoreService);
  private _injector = inject(Injector);

  private container = viewChild('container', {read: ViewContainerRef});

  notify(): void {
    this._pluginCommon.showMessage('Message from Host app');
  }

  loadPlugin(): void {
    //loadRemoteModule({
    //  type: 'module',
    //  remoteEntry: '/assets/plugins/plugin-one/remoteEntry.js',
    //  exposedModule: './Module'
    //}).then(m => {
    //  this._compiler.compileModuleAsync(m.PluginModule).then(moduleFactory => {
    //    const moduleRef = moduleFactory.create(this._injector) as any;
    //    const componentFactory = moduleRef.instance.resolveComponent();
    //    this.container.createComponent(componentFactory, undefined, moduleRef.injector);
    //  })
    //});
    this._pluginCore.renderPlugins(environment.PLUGIN_LIST, this.container()!, this._injector);
  }

}
