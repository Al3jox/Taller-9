import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1! : number;
  num2! : number;
  res! : number;

  mensajeOk : any;
  mensajeError : any;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    this.res = (this.num1 + this.num2);
  }

  restar(){
    if(this.num1 < 0 || this.num2 < 0){
      this.mensajeError = "Error alguno de los dos números es negativo"
    }
    else{
      this.res = (this.num1 - this.num2);
    }
  }

  multiplicar(){
    this.res = (this.num1 * this.num2);
  }

  dividir(){
    if(this.num1 == this.num2){
      this.mensajeError = "No se permiten números iguales"
    }
    else if(this.num1 <= 0 || this.num2 <= 0){
      this.mensajeError = "No se permiten los numeros iguales o menores a cero (0)"
    }
    else{
      this.res = (this.num1 / this.num2);
    }
    
  }

}
