import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCollapseModule,
    NzModalModule,
    NzButtonComponent,
    NzInputModule,
    NzColorPickerModule,
    NzIconModule
  ],
  exports: [
    NzCollapseModule,
    NzModalModule,
    NzButtonComponent,
    NzInputModule,
    NzColorPickerModule,
    NzIconModule
  ]
})
export class ZorroComponentsModule { }
