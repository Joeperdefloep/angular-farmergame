import { Injectable } from '@angular/core';


interface Asset {
  [name: string]: number
}

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private money: Asset = {};
  private labour: Asset = {};
  moneyOwned: number = 5000;
  houseLabour: number = 300;


  constructor() {}


  setMoney(key: string, amount: number){
    this.money[key]=amount;
  }

  get totalMoney(){
    let totalMoney: number = this.moneyOwned;
    for (const val of Object.values(this.money)){
      totalMoney += val;
    }
    return totalMoney;
  }

  setLabour(key: string, amount: number){
    this.labour[key]=amount;
  }

  get totalLabour(){
    let totalLabour: number = this.houseLabour;
    for (const val of Object.values(this.labour)){
      totalLabour += val;
    }
    return totalLabour;
  }
}
