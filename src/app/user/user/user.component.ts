import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user', // просто говоря новый тег HTML
  templateUrl: './user.component.html', // шаблон компонента
  styleUrls: ['./user.component.css'] // стили компонента
})
export class UserComponent implements OnInit {

  @Input() // этим декоратором говорим что это входные данные в переменную user
   user;

  isMarkedFirstTime = false;
  isMarkedSecondTime = false;

  onClick() {
    if (this.isMarkedFirstTime === true) {
      this.isMarkedSecondTime = true;
      this.isMarkedFirstTime = false;
    }
   this.isMarkedFirstTime = true;
    if (this.isMarkedSecondTime === true ) {
     this.isMarkedFirstTime = false;
      this.isMarkedSecondTime = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
