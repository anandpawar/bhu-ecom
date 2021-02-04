import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http: HttpClient) { }

  login = (loginData) => {
    return this.http.post<any>(`${environment.apiURL}admin/auth/login`, loginData)
        .pipe(map(data => {
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            localStorage.setItem('tokenData', JSON.stringify(data.token));
            return data.user;
        }));
  }

  userLogin = (loginData) => {
    return this.http.post<any>(`${environment.apiURL}auth/login`, loginData)
        .pipe(map(data => {
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            localStorage.setItem('tokenData', JSON.stringify(data.token));
            return data.user;
        }));
  }

  forgotPassword = (data) => {
    return this.http.post<any>(`${environment.apiURL}auth/reset-password/email`, data)
        .pipe(map(data => {
            return data;
        }));
  }

  isLoggedIn = () => {
    if(localStorage.getItem('tokenData') && localStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  }

  getToken = () => {
    let tokenData = localStorage.getItem('tokenData');
    tokenData = JSON.parse(tokenData);
    return tokenData['token']
  }

  logout = () => {
    let navigateTo = '/login';
    let user = localStorage.getItem('currentUser');
		user = JSON.parse(user);
		if(user.hasOwnProperty("isAdmin")){  
			navigateTo = '/client-portal';
    }
    localStorage.removeItem('currentUser');
    localStorage.removeItem('tokenData'); 
    this.router.navigate([navigateTo]);
  }
}
