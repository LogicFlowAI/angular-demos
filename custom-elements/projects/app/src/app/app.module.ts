import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatTableModule} from "@angular/material/table";
import { TemplateRenderComponent } from './components/template-render/template-render.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpClientModule} from "@angular/common/http";
import { InfoComponent } from './components/info/info.component';
import {MatButtonModule} from "@angular/material/button";
import {createCustomElement, NgElement, WithProperties} from "@angular/elements";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TooltipIconComponent } from './components/tooltip-icon/tooltip-icon.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    TemplateRenderComponent,
    InfoComponent,
    TooltipIconComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    injector: Injector
  ) {
    const InfoElement = createCustomElement(InfoComponent, {injector});
    customElements.define('info-element', InfoElement);

    const TooltipIcon = createCustomElement(TooltipIconComponent, {injector});
    customElements.define('i-tooltip', TooltipIcon);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'info-element': NgElement & WithProperties<{data: any}>,
    'i-tooltip': NgElement & WithProperties<{data: any}>
  }
}
