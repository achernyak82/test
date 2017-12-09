import { Component, OnInit} from '@angular/core';
import { UsersService } from './user.service';

@Component({
  selector: 'app-root', // по сути просто тег компонента в HTML
  templateUrl: './app.component.html', // путь к шаблону компонента
  styleUrls: ['./app.component.css'], // путь к стилям компонента
  providers: [UsersService]
})

export class AppComponent implements OnInit {
  ngOnInit() {
  }
}
