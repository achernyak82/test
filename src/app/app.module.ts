import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './hover.directive';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import {RouterModule} from '@angular/router';

 // создаем роуты для навигационного меню
 const routers = [
   {path: '', component: HomePageComponent},
   {path: 'setup', component: SetupPageComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, // задекларировали новый компонент, чтобы был доступен
    HoverDirective, // задекларировали созданную самими директиву
    SearchPipe, // задекларировали свой пайп
    HomePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, // импортируем HTTP модуль для работы с ним
    FormsModule, // поддержка ngModel
    HttpClientModule, // для новых версий импортируем вместо HTTP
    RouterModule.forRoot(routers) // for routing
  ],
  providers: [UserComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
