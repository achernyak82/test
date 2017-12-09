
import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({ // специальный декоратор, говорит что это директива
  selector : '[appHover]' // указываем селектор для директивы
})
export class HoverDirective {
 // декратор для привязки определенного свойства к переменной
  // в качестве параметра этого декоратора то поле, на которое привязка
  @HostBinding('class.hovered') isHovered = false; // будет или нет добавляться данный класс
  // вешаем событие с помощью декоратора, передаем в него то, что должно произойти
  @HostListener('mouseenter') onMouseEnter() { // onMouseEnter callback
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

}
