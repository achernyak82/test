import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable() // декторатор для того, чтобы можно было инжектировать HTTP
export class UsersService {

  constructor (private http: Http) { // инжектируем специальный класс, отвечающий за работу с AJAX запросами
  }

  getUsers() {
   return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
     .map(response => response.json()).map(response => response.results)
     .map(users => {
       return users.map(u => {
         return {
           name: u.name.title + ' ' + u.name.first + '  ' + u.name.last,
           image: u.picture.large,
           geo: 'City ' + u.location.city + ' ' + 'State ' + u.location.state + ' ' + 'Street ' + u.location.street
         };
       });
     });
  }
 // http объект возвращает http rxjs стрим, на который нужно подписаться
  // парсим ответ с помощью map

}
