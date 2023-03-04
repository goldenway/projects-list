import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) {}

     signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6a1AjOLuIcdtVkk47cd7LLCrljoSutX8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(errorResp => {
            let errorMessage = 'An unknown error occurred!';
            if (!errorResp.error || !errorResp.error.error) {
                return throwError(errorMessage);
            }
            switch(errorResp.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email already exists.';
            }
            return throwError(errorMessage);
        }));
     }
}
