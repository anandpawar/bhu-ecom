import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';
import { LanguagePipe } from './language.pipe';



@NgModule({
  declarations: [
    DurationPipe,
    LanguagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    LanguagePipe
  ]
})
export class SharedModule { }
