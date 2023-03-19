import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { HeaderComponent } from './components/header/header.component';
import {
  ModalAddBoardComponent,
  ModalAddTaskComponent,
  ModalDeleteComponent,
  ModalEditBoardComponent,
  ModalEditTaskComponent,
  ModalViewTaskComponent,
} from './components/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalAddBoardComponent,
    ModalAddTaskComponent,
    ModalDeleteComponent,
    ModalEditBoardComponent,
    ModalEditTaskComponent,
    ModalViewTaskComponent,
    NavMenuComponent,
    TaskItemComponent,
    ThemeToggleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
