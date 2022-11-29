import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 'recipes'

  constructor() {

  }

  pageSelected(page: string) {
    this.currentPage = page
    console.log(page);
    
  }
}
