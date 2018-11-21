import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface MYDATA {
    success: boolean,
    message: string;
}

interface REGISTERRESPONSE {
    success: boolean;
}

const apiUrl = '/api';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false; // JSON.parse(localStorage.getItem('loggedIn') || 'false');
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    // localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return  this.loggedInStatus; // JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  // get isLoggedIn() {
  //
  // }

    getUserDetails(username, password) {
        // post these details to API server return user info if correct
        return this.http.post<MYDATA>(apiUrl, {
            username,
            password
        });
    }

    registerUser(username, password) {
      return this.http.post<REGISTERRESPONSE>('/api/register.php', {
          username,
          password,
          // cpassword
      });
    }
}
