import { Component, ElementRef, ViewChild } from '@angular/core';
import { Technology } from '../../shared/technology.model';
import { TechnologiesService } from '../technologies.service';

@Component({
  selector: 'pl-technologies-edit',
  templateUrl: './technologies-edit.component.html'
})
export class TechnologiesEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('countInput') countInputRef: ElementRef;

  constructor(private technologiesService: TechnologiesService) {}

  onAddTechnology() {
    const newTechnology = new Technology(
      this.nameInputRef.nativeElement.value,
      this.countInputRef.nativeElement.value);
    
    this.technologiesService.addTechnology(newTechnology);
  }
}
