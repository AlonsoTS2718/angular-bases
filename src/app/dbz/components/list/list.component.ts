import { Component, EventEmitter, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Input } from '@angular/core';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter(); 
  //↑Declaración del evento


  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 2000
    }
  ];



  onDeleteCharacter( id:string ):void{
    if(!id) return
    this.onDelete.emit(id);
  }
  


}
