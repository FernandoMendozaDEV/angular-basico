import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  Heroes : string[] = ['Spiderman', 'Hulk', 'Thor', 'Capitan America', 'Ironman'];
  heroesBorrados : string = '';
  borrado: boolean = false;

  borrarHeroe(){
    this.borrado = true;
    this.heroesBorrados = this.Heroes.pop() || '';
  }

}
