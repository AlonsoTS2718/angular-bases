import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

//ng-template es como un div pero a diferencia del div el ng-template no
//se construye, no se va a mostrar nada de lo que esté dentro 
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Black Panter',
  ];
  public heroNamesCopy: string[] = this.heroNames.slice(); 
  public lastDeleteHero?: string; 
  private deleteHeroes: string[] = [];

  deleteLastHero(): void {
    if (this.heroNames.length == 0) {

      console.log('nothing for delete')
      return;
    }

    this.lastDeleteHero = this.heroNames.pop()!.toString();
    this.deleteHeroes.push(this.lastDeleteHero);
    console.log(this.deleteHeroes);
  }

  resetHeroNames(): void {

     this.heroNames = this.heroNamesCopy.slice(); 
    console.log("Restore Heroes")

  }
}
