import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  
  public name: string = 'ironMan';
  public age: number = 45; 

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(newName: string): void{
    newName = 'Spiderman';
    this.name = newName; 
  }
  changeAgeHero(newAge: number): void{
    newAge = 25;
    this.age = newAge; 
  }

  resetValues(){
    this.name = 'ironMan';
    this.age = 45;
  }


// si queremos dejar un método por hacer podemos poner thow 'mensaje' o 
// //TODO: 

}
