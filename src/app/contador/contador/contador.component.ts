import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{ titulo }} </h1>
    <span>La base es de <strong> {{base}} </strong></span> <br>
    
    <button (click)="acumulador(base)"> + {{base}}</button>
    <span> {{numero}}</span>
    <button (click)="acumulador(-base)"> - {{base}}</button>
    `
})

export class ContadorComponent{

    titulo : string = 'ContadorApp';
    numero : number = 10;
    base   : number = 5;

  acumulador(valor:number){
    this.numero += valor;
  }

}