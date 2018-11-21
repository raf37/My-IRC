
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const apiUrl = '/api';

@Injectable()
export class ChatService {

    constructor(private http: Http) { }

    getChatByRoom(room) {
        return new Promise((resolve, reject) => {
            this.http.get(apiUrl + '/chat/' + room)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    saveChat(data) {
        return new Promise((resolve, reject) => {
            this.http.post(apiUrl + '/chat', data)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
