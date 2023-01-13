import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'ChurpusPizzaLab';
    
  Menu: MenuItem[] = [
    {
      item: "chicken fingers",
      category: "Starters",
      price: 8.99
    },
    {
      item: "Pizza",
      category: "Dinner",
      price: 5.99
    },
    {
      item: "BreadSticks",
      category: "Starters",
      price: 2.99
    },
    {
      item: "Wings",
      category: "Dinner",
      price: 9.99
    },
    {
      item: "Cinnamon Roll",
      category: "Dessert",
      price: 5.49
    },
    {
      item: "Pop",
      category: "Drinks",
      price: 1.99
    },
    {
      item: "Beer",
      category: "Drinks",
      price: 4.99
    }
  ];
  
  getByCategory(cat:string): MenuItem[]{
    let result: MenuItem[] = [];

    this.Menu.forEach((i:MenuItem) => {
      if(i.category == cat){
        result.push(i);
      }
    });

      return result;
  }
};
