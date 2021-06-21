import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ElevationDirective } from './directive/elevation.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ElevationDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    ElevationDirective
  ]
})
export class CoreModule { }
