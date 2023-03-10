import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { ProjectsService } from "../projects/projects.service";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'pl-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    collapsed = true;
    isLoggedIn = false;
    userSub: Subscription;

    constructor(private projectsService: ProjectsService,
                private authService: AuthService) {}

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
            this.isLoggedIn = user ? true : false;
        });
    }

    onSaveData() {
        this.projectsService.saveProjects();
    }

    onFetchData() {
        this.projectsService.fetchProjects().subscribe();
    }

    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}
