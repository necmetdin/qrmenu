import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "producten", component: MainComponent},
  
  { path: "**", redirectTo: "/producten" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
