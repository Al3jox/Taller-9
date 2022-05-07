import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Rutas
import { DatosComponent } from './componentes/datos/datos.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { DonacionesComponent } from './componentes/donaciones/donaciones.component';
import { CardComponent } from './componentes/card/card.component';

const routes: Routes = [
  {path: 'datos', component: DatosComponent},
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'donaciones', component: DonacionesComponent},
  {path: 'cards', component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
