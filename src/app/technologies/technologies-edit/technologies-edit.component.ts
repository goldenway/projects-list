import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Technology } from '../../shared/technology.model';

@Component({
  selector: 'pl-technologies-edit',
  templateUrl: './technologies-edit.component.html'
})
export class TechnologiesEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('countInput') countInputRef: ElementRef;
  @Output() addClick = new EventEmitter<Technology>();

  onAddTechnology() {
    const newTechnology = new Technology(
      this.nameInputRef.nativeElement.value,
      this.countInputRef.nativeElement.value);
    
    this.addClick.emit(newTechnology);
  }
}
