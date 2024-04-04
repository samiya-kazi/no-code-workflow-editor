import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCollapseModule,
    NzModalModule,
    NzButtonComponent,
    NzInputModule
  ],
  exports: [
    NzCollapseModule,
    NzModalModule,
    NzButtonComponent,
    NzInputModule
  ]
})
export class ZorroComponentsModule { }
