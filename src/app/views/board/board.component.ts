import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  constructor(private categoriesServices: CategoriesService) {}

  public getCategories() {
    const categories = this.categoriesServices
      .getCategories()
      .subscribe((data) => data);

    console.log(categories);
  }
}
