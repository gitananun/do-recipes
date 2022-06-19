import { LoggingService } from './../../services/logging.service';
import { ShoppingListService } from './../../services/shopping-list.service';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
  providers: [LoggingService],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) slForm!: NgForm;

  private editingSub!: Subscription;
  private editingIndex!: number;
  editMode: boolean = false;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.editingSub = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editingIndex = index;
        this.editMode = true;

        let editingIng: Ingredient =
          this.shoppingListService.getIngredient(index);

        this.slForm.setValue({
          name: editingIng.name,
          amount: editingIng.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.editingSub.unsubscribe();
  }

  onSubmit(form: NgForm) {
    let values = form.value as { name: string; amount: string };
    let ing = new Ingredient(values.name, +values.amount);

    this.editMode
      ? this.shoppingListService.updateIngredient(this.editingIndex, ing)
      : this.shoppingListService.addNewIngredient(ing);

    this.editMode = false;
    this.slForm.reset();
  }
}
