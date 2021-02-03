import { Animal } from './animal';
import {FormControl} from '@angular/forms'


describe('Animal', () => {
  it('should create an instance', () => {
    expect(new Animal(new FormControl, {
      id: 1,
      nrOwned: 10,
      buyPrice: 100,
      sellPrice: 60
    })).toBeTruthy();


  });
});
