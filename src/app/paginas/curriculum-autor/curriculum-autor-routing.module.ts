import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculumAutorPage } from './curriculum-autor.page';

const routes: Routes = [
  {
    path: '',
    component: CurriculumAutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculumAutorPageRoutingModule {}
