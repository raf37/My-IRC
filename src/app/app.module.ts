import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
// import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {SocketIoConfig, SocketIoModule} from 'ng6-socket-io';
import { ChatService } from './chat.service';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {AuthGuard} from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
} from '@angular/material';
import { ChatComponent } from './chat/chat.component';
import {HttpModule} from '@angular/http';

// @TODO 4200 ou 3100??????
const config: SocketIoConfig = { url: 'http://localhost:3100', options: {} };

const appRoutes: Routes = [
    {
        path: 'books',
        component: BookComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: BookDetailComponent,
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: BookCreateComponent,
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: BookEditComponent,
        data: { title: 'Edit Book' }
    },
    { path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
    { path: 'chat',
        component: ChatComponent,
        data: {title: 'Chat'}
    },
    {path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
    },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    LogoutComponent,
    DashboardComponent,
    RegisterComponent,
    BookComponent,
    BookCreateComponent,
    BookDetailComponent,
    BookEditComponent,
    ChatComponent
  ],
  // imports: [
  //   BrowserModule,
  //   FormsModule,
  //   HttpClientModule,
  //   RouterModule.forRoot([
  //       {
  //         path: 'login',
  //           component: LoginComponent
  //       },
  //       {
  //         path: 'admin',
  //           component: AdminComponent,
  //           canActivate: [AuthGuard]
  //       },
  //       {
  //           path: 'dashboard',
  //           component: DashboardComponent
  //       },
  //       {
  //           path: 'register',
  //           component: RegisterComponent
  //       },
  //       {
  //           path: 'logout',
  //           component: LogoutComponent
  //       },
  //       {
  //           path: '',
  //           component: HomeComponent
  //       }
  //   ]),
  //     SocketIoModule.forRoot(config),
  //     BrowserAnimationsModule,

  // ],

    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        SocketIoModule.forRoot(config),
        HttpModule,
    ],
  providers: [AuthService, UserService, AuthGuard, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
