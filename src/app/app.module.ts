import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Componentes
import { BarraComponent } from './componentes/barra/barra.component';
import { FooterComponent } from './componentes/footer/footer.component';
// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DatosComponent } from './componentes/datos/datos.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { DonacionesComponent } from './componentes/donaciones/donaciones.component';
import { CardComponent } from './componentes/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FooterComponent,
    DatosComponent,
    CalculadoraComponent,
    DonacionesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
