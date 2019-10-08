import { model, TodoItem } from './../Model/model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mtechlabtodo';

  model = new model();
  //return user name

  getName(){
    return this.model.user;
  }

  additem(newTask){
    if(newTask !=""){
      this.model.items.push(  new TodoItem(newTask, false));
      

    }
  }
  getTodoItems(){
    return this.model.items;
    // return this.model.items.filter(item=>
      // item.done);

  }
}
