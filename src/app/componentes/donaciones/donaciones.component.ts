import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  nombres! : any;
  apellidos! : any;
  edad! : number;
  ciudad! : any;
  cantidad! : number;

  mensajeOk : any;
  mensajeError : any;

  constructor() { }

  ngOnInit(): void {
  }

  validarFormulario():void{

    if(this.nombres == null){
      this.mensajeError = "Falta diligenciar el campo de nombres"
    }
    else if(this.apellidos == null){
      this.mensajeError = "Falta diligenciar el campo de apellidos"
    }
    else if(this.edad == null){
      this.mensajeError = "Falta diligenciar el campo de edad"
    }
    else if(this.ciudad == null){
      this.mensajeError = "Falta diligenciar el campo de ciudad"
    }
    else if(this.cantidad == null){
      this.mensajeError = "Falta diligenciar el campo de cantidad"
    }
    else{
      this.mensajeOk = "Donación Exitosa!... GRACIAS"
    }

  }

}
