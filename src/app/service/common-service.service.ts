import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
   url = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };




getcustomerdatabyphone() {
    const  promise = new Promise((resolve, reject) => {
    this.httpclient.get(this.url, this.httpOptions).subscribe((res) => {
      resolve(res);
      } ,  error => {
        reject();
      });
});
  return promise;
}


postcustomerdata() {
  const  promise = new Promise((resolve, reject) => {
  this.httpclient.post(this.url, 'data', this.httpOptions).subscribe((res) => {
    resolve(res);
    } ,  error => {
      reject();
    });
});

return promise;

}

}
