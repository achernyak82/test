import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './hover.directive';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, // задекларировали новый компонент, чтобы был доступен
    HoverDirective, // задекларировали созданную самими директиву
    SearchPipe // задекларировали свой пайп
  ],
  imports: [
    BrowserModule,
    HttpModule, // импортируем HTTP модуль для работы с ним
    FormsModule // поддержка ngModel
  ],
  providers: [UserComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
