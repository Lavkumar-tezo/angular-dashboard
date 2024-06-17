import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private havingAccess:boolean=false;

  constructor(private http:HttpClient){
  }
  login(email: string, password: string): boolean {
    let params:HttpParams= new  HttpParams();
    params=params.set('email',email);
    params=params.set('password',password);
    this.http.get(environment.URL+'Login',{
      params:params
    }).subscribe({
      next: (data) => {
          console.log(data)
      }, error: (err) => {
          console.error(err);
      }
  });
    this.isLoggedIn = false;
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  haveAccess():boolean{
    return this.havingAccess;
  }
}
