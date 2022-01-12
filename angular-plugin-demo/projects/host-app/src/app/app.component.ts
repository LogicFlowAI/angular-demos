import {Component, Injector, ViewChild, ViewContainerRef} from '@angular/core';
import {PluginCoreService} from "../../../plugin-core/src/lib/plugin-core.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

  constructor(
    private _pluginCore: PluginCoreService,
    private _injector: Injector
  ) {
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
    this._pluginCore.renderPlugins(environment.PLUGIN_LIST, this.container, this._injector);
  }

}
