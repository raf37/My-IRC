import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface MYDATA {
    message: string,
    success: boolean;
}

interface ISLOGGEDIN {
    status: boolean;
}

interface LOGOUTSTATUS {
    success: boolean;
}

const apiUrl = '/api';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<MYDATA>(apiUrl);
  }

  isLoggedIn(): Observable<ISLOGGEDIN> {
    return this.http.get<ISLOGGEDIN>('/api/isloggedin.php');
  }

  logout() {
      return this.http.get<LOGOUTSTATUS>('/api/logout.php');
  }
}
