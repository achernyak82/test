
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform { // у каждого пайпа д.б. метод трансформ, для этого
// имплементируем соответствующий интерфейс PipeTransform
 transform (users, value) { // принимает массив юзеров и значение из инпута
   return users.filter(user => {
     return user.name.includes(value);
     // фильтруем массив юзеров, на каждой итерации получаем объект юзера и смотрим есть ли в его имени велью
   });
 }
}
