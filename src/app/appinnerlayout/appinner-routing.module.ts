import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppinnerlayoutComponent } from './appinnerlayout.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: AppinnerlayoutComponent,

    children: [
      {
        path: 'pagenotfound',
        component: PagenotfoundComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),    
  ],
  exports: [RouterModule]
})
export class AppinnerlayoutRoutingModule { }
