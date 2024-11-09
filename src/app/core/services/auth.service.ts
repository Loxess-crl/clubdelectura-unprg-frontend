import { Injectable } from '@angular/core';
import { BASE_ENDPOINT, TOKEN_KEY } from '../../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { JWTRequestModel, JWTResponseModel } from '../interfaces/jwt.interface';
import { Observable } from 'rxjs';
// import { IUser } from '../interfaces/user.interface';
import { DataResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseEndpoint = BASE_ENDPOINT;
  private authError = false;
  private isErrorModalOpen = false;
  private httpOptions?: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {}

  // public login(id_token: string, provider: string) {
  //   return this.http.post<JWTResponseModel>(
  //     `${this.baseEndpoint}/auth/firebase/login`,
  //     { id_token, provider }
  //   );
  // }

  public checkUrl(clear?: Boolean) {
    const url = window.location.href.split(window.location.host)[1];

    if (clear) {
      localStorage.clear();
    }
    if (url !== '/auth/login' && url !== '/') {
      this.setUrl(url);
    }
  }
  public setUrl(url: string): void {
    localStorage.removeItem('url');
    localStorage.setItem('url', url);
  }

  public getUrl(): string | null {
    return localStorage.getItem('url');
  }

  public setAuthError(error: boolean) {
    this.authError = error;
  }

  public getAuthError() {
    return this.authError;
  }

  public setIsErrorModalOpen(isOpen: boolean) {
    this.isErrorModalOpen = isOpen;
  }

  public getIsErrorModalOpen() {
    return this.isErrorModalOpen;
  }

  public logout(): Observable<DataResponse<any>> {
    return this.http.post<DataResponse<any>>(`/auth/logout`, {});
  }

  public afterLogout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  public setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  // public setUserLocalStorage(user: User) {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }

  // public getUserLocalStorage(): IUser {
  //   return JSON.parse(localStorage.getItem('user') || '{}');
  // }

  private generateAuthorizationHeader() {
    return 'Bearer ' + localStorage.getItem(TOKEN_KEY);
  }

  public getHttpOptions() {
    if (!this.httpOptions) {
      this.httpOptions = new HttpHeaders({
        Accept: 'application/json',
      });
    }
    if (this.isLoggedIn()) {
      this.httpOptions = this.httpOptions.set(
        'Authorization',
        this.generateAuthorizationHeader()
      );
    }
    return this.httpOptions;
  }
}
