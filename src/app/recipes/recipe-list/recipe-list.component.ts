import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent {
  test1 = 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
  test2 = 'https://www.allrecipes.com/thmb/j-UIY1oXZZWisuG5e5tRitsOvIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg'
  recipes: Recipe[] = [
    new Recipe('Test recipe','This is the first test',this.test1),
    new Recipe('Test recipe 2','This is the second test',this.test2),



  ]
  @Output() recipeSelectedInList = new EventEmitter<Recipe>()

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedInList.emit(recipe)
  }


}
