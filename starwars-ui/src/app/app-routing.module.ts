import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPersonagensComponent } from './lista-personagens/lista-personagens.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-personagens', component: ListaPersonagensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
