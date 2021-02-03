import { FormControl } from '@angular/forms'

//https://stackoverflow.com/questions/55583732/what-is-the-purpose-of-object-assign-in-the-constructor-of-a-typescript-object

export interface ICrop{
    id: number;
    name: string;
    nrPlanted: number;
    buyPrice: number;
    labour: number;
    nrAvailable?: number;
}


export class Crop {
    public id: number = 0;
    public name: string = '';
    public nrPlanted: number = 0;
    public nrWantedFC: FormControl;
    public buyPrice: number = 0;
    public labour: number = 0;
    public labourChange: number;
    public priceChange: number = 0;
    public reqFields: number = 1;

    constructor(nrWantedFC: FormControl, values: ICrop )
    {
        this.nrWantedFC = nrWantedFC;
        console.log(nrWantedFC.value, this.nrWantedFC.value, nrWantedFC === this.nrWantedFC);
        Object.assign(this,values);
        this.labourChange = this.nrPlanted*this.labour
        this.nrWantedFC.valueChanges.subscribe((selectedValue)=>{
            
            this.priceChange = this.buyPrice*(this.nrPlanted- this.nrWantedFC.value);
            this.labourChange = this.labour*(this.nrPlanted+nrWantedFC.value);
            console.log("message from Crop class: ", this.labourChange);
        }
        )
    }
}
