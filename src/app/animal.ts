import { FormControl } from '@angular/forms'

//https://stackoverflow.com/questions/55583732/what-is-the-purpose-of-object-assign-in-the-constructor-of-a-typescript-object

export interface IAnimal{
    id: number;
    name: string;
    nrOwned: number;
    buyPrice: number;
    sellPrice: number;
}


export class Animal {
    public id: number = 0;
    public name: string = '';
    public nrOwned: number = 0;
    public nrWantedFC: FormControl;
    public buyPrice: number = 0;
    public sellPrice: number = 0;
    public priceChange: number = 0;

    constructor(nrWantedFC: FormControl, values: IAnimal )
    {
        this.nrWantedFC = nrWantedFC;
        console.log(nrWantedFC.value, this.nrWantedFC.value, nrWantedFC === this.nrWantedFC)
        Object.assign(this,values)
        this.nrWantedFC.valueChanges.subscribe((selectedValue)=>{
            console.log("message from animal class: ", selectedValue);
            let nrChange = this.nrOwned - selectedValue;
            if (nrChange > 0) {
                //selling animals
                this.priceChange = nrChange*this.sellPrice;
            } else {
                this.priceChange = nrChange*this.buyPrice;
            }
        }
        )
    }
}
