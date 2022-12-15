import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id: number

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //name: string, desc: string, imagePath: string, ingredients: Ingredient[]
    //public name: string, public amount: number
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    )
  }

  onAddToShoppingList() {
    //console.log("működök!");
    this.recipeService.addIngToSl(this.recipe.ingredients)

  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
}
