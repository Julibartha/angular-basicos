import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['ironman', 'hulk', 'thor', 'spiderman']
  heroeBorrado: string = "";
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
