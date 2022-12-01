import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('name') nameInput: ElementRef
  @ViewChild('amount') amountInput: ElementRef
  @Output() addedIngredient = new EventEmitter<Ingredient>()

  onAdd() {
    const newIngredientName = this.nameInput.nativeElement.value
    const newIngredientAmount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount)
    this.addedIngredient.emit(newIngredient)
  }


}

