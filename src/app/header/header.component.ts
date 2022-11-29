import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() currentPage = new EventEmitter<string>()
  selectedPage(page: string) {
    this.currentPage.emit(page)
  }
}
