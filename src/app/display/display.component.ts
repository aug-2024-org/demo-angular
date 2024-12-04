import { Component } from '@angular/core';

@Component({
  selector: 'display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  movieName: string = "Interstellar";
  mName: string = '';
  show: boolean = true;
  
  showMovie(): void{
    if(this.show){
      this.mName = 'Avengers: End Game';
    } else {
      this.mName = '';
    }
    this.show = !this.show;
  }
}
