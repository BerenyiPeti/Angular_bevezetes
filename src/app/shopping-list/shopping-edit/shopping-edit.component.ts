import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameInput: ElementRef
  @ViewChild('amount') amountInput: ElementRef

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {

  }

  onAdd() {
    const newIngredientName = this.nameInput.nativeElement.value
    const newIngredientAmount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount)
    this.slService.addIngredient(newIngredient)
  }


}

