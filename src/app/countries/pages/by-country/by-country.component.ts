import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  public searchTerm: string = 'Argentina'

  constructor() { }

  search() {
    console.log(this.searchTerm);
  }
}
