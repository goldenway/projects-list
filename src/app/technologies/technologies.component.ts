import { Component, OnInit } from '@angular/core';
import { Technology } from '../shared/technology.model';
import { TechnologiesService } from './technologies.service';

@Component({
  selector: 'pl-technologies',
  templateUrl: './technologies.component.html'
})
export class TechnologiesComponent implements OnInit {
  technologies: Technology[];

  constructor(private technologiesService: TechnologiesService) {}

  ngOnInit(): void {
    this.technologies = this.technologiesService.getTechnologies();
  }
}
