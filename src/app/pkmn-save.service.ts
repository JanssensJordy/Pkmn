import { Injectable } from '@angular/core';
import {Pkmn} from './Pkmn';

@Injectable({
  providedIn: 'root'
})
export class PkmnSaveService {

  constructor() { }
  savePkmn(pkmnList: Pkmn[]){
    for(let pkmn of pkmnList){
      localStorage.setItem(pkmn.name, JSON.stringify(pkmn));;
    }
  }
}
