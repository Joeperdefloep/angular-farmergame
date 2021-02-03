import { Component, OnInit } from '@angular/core';
import {FormControl, FormArray, Validators} from '@angular/forms'
import { AssetService } from '../asset.service';

import { ICrop, Crop } from '../crop'


@Component({
  selector: 'app-manage-crops',
  templateUrl: './manage-crops.component.html',
  styleUrls: ['./manage-crops.component.scss']
})
export class ManageCropsComponent implements OnInit {
  crops: Crop[] = [];
  fa: FormArray = new FormArray([]);
  subTotal: number = 0;
  subLabour: number = 0;
  totalFields: number = 20;
  freeFields: number = 20;

  constructor(private _assetService: AssetService) {
  }

  ngOnInit(): void {
    let mockCrops: ICrop[] = [{
      id: 0,
      name: 'Maize',
      nrPlanted: 0,
      buyPrice: 400,
      labour: 30,
    },{
      id: 1,
      name: 'Beans',
      nrPlanted: 0,
      buyPrice: 100,
      labour: 70
    }];
    
    for (let i in  mockCrops) {
      console.log(mockCrops[i])
      let fc = new FormControl(mockCrops[i].nrPlanted,[Validators.required,Validators.min(mockCrops[i].nrPlanted)])
      this.crops.push(new Crop(fc, mockCrops[i]));
      this.fa.push(fc)
    }
    
    this.fa.valueChanges.subscribe(() => {
      this.subTotal = 0;
      this.subLabour = 0;
      this.freeFields = this.totalFields
      for (let i in this.crops){
        this.subTotal += this.crops[i].priceChange;
        this.subLabour -= this.crops[i].labourChange;
        this.freeFields -= this.crops[i].nrWantedFC.value*this.crops[i].reqFields
      }
      this._assetService.setMoney('crops',this.subTotal);
      this._assetService.setLabour('crops',this.subLabour);
    })
  }
}
