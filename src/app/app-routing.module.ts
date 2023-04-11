import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2/comp2.component';
import { RouterModule, Routes } from '@angular/router';
import { ComppComponent } from './compp/compp.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent_child/parent/parent.component';
import { ChildComponent } from './parent_child/child/child.component';

const routes: Routes = [{path:"user",component:Comp2Component },{path:"user/compp",component:ComppComponent},
{path:"parent",component:ParentComponent},{path:"child",component:ChildComponent}

];

@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // Définissez les routes de votre application ici

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
