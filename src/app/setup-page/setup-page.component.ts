import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  size;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.size = this.usersService.size; // значение по умолчанию в сетапе
  }

  onChange() {
   this.usersService.setSize(+this.size); //+ transform forcibly into number in case if it's string
  }

}
