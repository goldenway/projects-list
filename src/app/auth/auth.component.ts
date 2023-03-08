import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService, AuthResponseData } from "./auth.service";

@Component({
    selector: 'pl-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    errorMessage: string = null;

    constructor(private authService: AuthService,
                private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;

        let authObservable: Observable<AuthResponseData>;

        if (this.isLoginMode) {
            authObservable = this.authService.login(email, password);
        } else {
            authObservable = this.authService.signup(email, password);
        }
        
        authObservable.subscribe(
            respData => {
                console.log(respData);
                this.errorMessage = null;
                this.isLoading = false;
                this.router.navigate(['/projects']);
            }, errorResp => {
                console.log(errorResp);
                this.errorMessage = errorResp;
                this.isLoading = false;
            }
        );

        form.reset();
    }
}
