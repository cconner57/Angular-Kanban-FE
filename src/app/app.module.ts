import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
