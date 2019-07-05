import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* importar los componentes*/
import {InicioComponent} from './inicio/inicio.component';

const routes: Routes = [
	{path: '', component: InicioComponent },
	{path: 'inicio', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
