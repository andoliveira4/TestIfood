import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl = environment.apiUrl + '/login/';
  statusLogin: any;

  constructor(private http: HttpClient) { }


  login(model: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(model.username + ':' + model.password),
        'Content-Type': 'application/json; charset=utf-8'
      })
    };

    console.log('Basic ' + btoa(model.username + ':' + model.password));

    return this.http.post(this.baseUrl, '', httpOptions).pipe(
      map((resposta: any) => {
        const retorno = resposta;
        if (retorno) {
          localStorage.setItem('statusLogin', retorno.success);
          return retorno;
        }
      })
    );
  }

  loggedIn() {
    const statusLogin = localStorage.getItem('statusLogin');
    if (statusLogin) {
      return true;
    } else {
      return false;
    }
  }


}
