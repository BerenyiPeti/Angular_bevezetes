import { Recipe } from "./recipe.model"
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    test1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/330px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG'
    test2 = 'https://media.istockphoto.com/id/618630648/photo/homemade-cheese-smash-burger.jpg?s=612x612&w=0&k=20&c=OGgJ0M1_omgjTOrpz_uRt2S48BiHVUrGNg57Qc4ljuA='
    
    recipeSelected = new EventEmitter<Recipe>()
    
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'A super-tasty Schnitzel - just awesome!', 
        this.test1, [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),

        new Recipe('Big Fat Burger', 
        'A big juicy burger', 
        this.test2, [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2)
        ])
    ]

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice()
    }

    addIngToSl(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}