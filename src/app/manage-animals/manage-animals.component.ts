import { Component, OnInit } from '@angular/core';
import { IAnimal, Animal } from '../animal'
import { FormArray, FormControl, Validators } from '@angular/forms'
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-manage-animals',
  templateUrl: './manage-animals.component.html',
  styleUrls: ['./manage-animals.component.scss']
})
export class ManageAnimalsComponent implements OnInit {
  animals: Animal[] = [];
  //this FormArray is only created to listen to changes in all of the animals, looking for a more sublte solution
  fa: FormArray = new FormArray([]);
  subTotal: number = 0;
  constructor(private _assetService: AssetService) {
  }

  ngOnInit(): void {
    let mockAnimals: IAnimal[] = [{
      id: 0,
      name: 'Cow',
      nrOwned: 3,
      buyPrice: 400,
      sellPrice: 300
    },{
      id: 1,
      name: 'Goat',
      nrOwned: 2,
      buyPrice: 100,
      sellPrice: 70
    }];
    
    for (let i in  mockAnimals) {
      console.log(mockAnimals[i])
      let fc = new FormControl(mockAnimals[i].nrOwned,[Validators.required,Validators.min(0)])
      this.animals.push(new Animal(fc, mockAnimals[i]));
      this.fa.push(fc)
    }
    
    this.fa.valueChanges.subscribe(() => {
      this.subTotal = 0
      for (let i in this.animals){
        this.subTotal += this.animals[i].priceChange
      }
      this._assetService.setMoney('animal',this.subTotal);
    })
  }

}
