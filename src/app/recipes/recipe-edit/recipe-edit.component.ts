import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  slug: string = '';
  editMode: boolean = false;
  recipeForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.editMode = this.slug != null;
      this.initForm();
    });
  }

  onSubmit(): void {
    if (this.editMode)
      this.recipeService.updateRecipe(this.slug, this.recipeForm.value);
    else this.recipeService.addRecipe(this.recipeForm.value);

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onCancel(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    this.ingredientsFormArray().push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index: number) {
    this.ingredientsFormArray().removeAt(index);
  }

  getControls() {
    return this.ingredientsFormArray().controls;
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (this.editMode) {
      let recipe: Recipe | undefined = this.recipeService.getRecipe(this.slug);

      if (recipe) {
        recipeName = recipe.name;
        recipeImagePath = recipe.imagePath;
        recipeDescription = recipe.description;

        if (recipe.ingredients) {
          for (let ing of recipe.ingredients) {
            recipeIngredients.push(
              new FormGroup({
                name: new FormControl(ing.name, Validators.required),
                amount: new FormControl(ing.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/),
                ]),
              })
            );
          }
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  private ingredientsFormArray() {
    return this.recipeForm.get('ingredients') as FormArray;
  }
}
