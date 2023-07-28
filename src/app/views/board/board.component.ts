import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  constructor(
    private categoriesServices: CategoriesService,
    private userService: UserService
  ) {}

  public getCategories() {
    const categories = this.categoriesServices
      .getCategories()
      .subscribe((data) => data);

    console.log(categories);
  }

  public getUsers() {
    const users = this.userService.getUsers().subscribe((data) => data);
    console.log(users);
  }
}
