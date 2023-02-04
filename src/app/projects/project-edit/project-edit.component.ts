import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'pl-project-edit',
  templateUrl: './project-edit.component.html'
})
export class ProjectEditComponent implements OnInit {
  isEditMode = false;
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.isEditMode = params['id'] != null;
      }
    );
  }
}
