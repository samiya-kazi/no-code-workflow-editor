import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { EditorComponent } from './components/editor/editor.component';
import { TeamEditorComponent } from './components/team-editor/team-editor.component';
import { ZorroComponentsModule } from './modules/zorro-components/zorro-components.module';
import { WorkflowCollapseComponent } from './components/workflow-collapse/workflow-collapse.component';
import { EditAreaComponent } from './edit-area/edit-area.component';
import { WorkflowStepCardComponent } from './components/workflow-step-card/workflow-step-card.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TeamEditorComponent,
    WorkflowCollapseComponent,
    EditAreaComponent,
    WorkflowStepCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ZorroComponentsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
