import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
  ],
  exports: [
    NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
  ],
  declarations: []
})
export class MaterialModule {}
