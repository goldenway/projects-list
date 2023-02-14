import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Technology } from '../../shared/technology.model';
import { TechnologiesService } from '../technologies.service';

@Component({
  selector: 'pl-technologies-edit',
  templateUrl: './technologies-edit.component.html'
})
export class TechnologiesEditComponent {
  constructor(private technologiesService: TechnologiesService) {}

  onAddTechnology(form: NgForm) {
    const newTechnology = new Technology(form.value.name, form.value.count);
    this.technologiesService.addTechnology(newTechnology);

    form.reset();
  }
}
