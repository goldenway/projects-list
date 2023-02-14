import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Technology } from '../../shared/technology.model';
import { TechnologiesService } from '../technologies.service';

@Component({
  selector: 'pl-technologies-edit',
  templateUrl: './technologies-edit.component.html'
})
export class TechnologiesEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  editMode = false;
  editedItem: Technology;
  subscription: Subscription;

  constructor(private technologiesService: TechnologiesService) {}

  ngOnInit(): void {
    this.subscription = this.technologiesService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItem = this.technologiesService.getTechnology(index);
      this.form.setValue({name: this.editedItem.name, count: this.editedItem.count});
    });
  }

  onAddTechnology(form: NgForm) {
    const newTechnology = new Technology(form.value.name, form.value.count);
    this.technologiesService.addTechnology(newTechnology);

    form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
