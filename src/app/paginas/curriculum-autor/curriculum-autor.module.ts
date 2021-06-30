import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculumAutorPageRoutingModule } from './curriculum-autor-routing.module';

import { CurriculumAutorPage } from './curriculum-autor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculumAutorPageRoutingModule
  ],
  declarations: [CurriculumAutorPage]
})
export class CurriculumAutorPageModule {}
