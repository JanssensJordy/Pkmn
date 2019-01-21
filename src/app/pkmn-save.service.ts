import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PkmnSaveService {

  constructor() { }
  savePkmn(pkmnList: []){
    for(let pkmn of pkmnList){
      localStorage.setItem(pkmn.name, JSON.stringify(pkmn));;
    }
  }
}
