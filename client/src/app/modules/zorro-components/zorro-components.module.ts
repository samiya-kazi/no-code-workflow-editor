import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCollapseModule,
    NzModalModule,
    NzButtonComponent,
    NzInputModule,
    NzColorPickerModule,
    NzIconModule,
    NzSelectModule
  ],
  exports: [
    NzCollapseModule,
    NzModalModule,
    NzButtonComponent,
    NzInputModule,
    NzColorPickerModule,
    NzIconModule,
    NzSelectModule
  ]
})
export class ZorroComponentsModule { }
