import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Subject, tap, throwError } from "rxjs";

import { User } from "./user.model";

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new Subject<User>();

    constructor(private http: HttpClient) {}
    
    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6a1AjOLuIcdtVkk47cd7LLCrljoSutX8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(respData => {
                this.handleAuthentication(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
            })
        );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6a1AjOLuIcdtVkk47cd7LLCrljoSutX8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(respData => {
                this.handleAuthentication(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
            })
        );
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }

    private handleError(errorResp: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorResp.error || !errorResp.error.error) {
            return throwError(errorMessage);
        }
        switch(errorResp.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exists.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return throwError(errorMessage);
    }
}
