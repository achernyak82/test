import { Component, OnInit} from '@angular/core';
import { UsersService } from './user.service';

@Component({
  selector: 'app-root', // по сути просто тег компонента в HTML
  templateUrl: './app.component.html', // путь к шаблону компонента
  styleUrls: ['./app.component.css'], // путь к стилям компонента
  providers: [UsersService] // подключение сервиса
})

export class AppComponent implements OnInit {
  users = [];
  searchStr = '';
  constructor (private usersService: UsersService ) { // конструктор инжектирует
  }
  ngOnInit() { // присвоения данных принято делать здесь, это один из callback
    // this.users = this.usersService.users;
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    }); // subscribe - подписка на стрим
  }
}
