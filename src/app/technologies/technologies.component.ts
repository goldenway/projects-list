import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Technology } from '../shared/technology.model';
import { TechnologiesService } from './technologies.service';

@Component({
  selector: 'pl-technologies',
  templateUrl: './technologies.component.html'
})
export class TechnologiesComponent implements OnInit, OnDestroy {
  technologies: Technology[];
  subscription: Subscription;

  constructor(private technologiesService: TechnologiesService) {}

  ngOnInit(): void {
    this.technologies = this.technologiesService.getTechnologies();
    this.subscription = this.technologiesService.technologiesChanged.subscribe(
      (technologies: Technology[]) => {
        this.technologies = technologies;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
