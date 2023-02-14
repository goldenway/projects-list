import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Technology } from "../shared/technology.model";

@Injectable({
	providedIn: 'root'
})
export class TechnologiesService {
	technologiesChanged = new Subject<Technology[]>();
	startedEditing = new Subject<number>();
	private technologies: Technology[] = [
		new Technology('JavaScript', 5),
		new Technology('HTML5', 5),
		new Technology('Angular', 4)
	];

	getTechnologies(): Technology[] {
		return this.technologies;
	}

	getTechnology(index: number) {
		return this.technologies[index];
	}

	addTechnology(technology: Technology) {
		this.technologies.push(technology);
		this.technologiesChanged.next(this.technologies.slice());
	}

	recalculateTechnologies(technologies: Technology[]) {
		this.technologies.push(...technologies);
		this.technologiesChanged.next(this.technologies.slice());
	}

	updateTechnology(index: number, newTechnology: Technology) {
		this.technologies[index] = newTechnology;
		this.technologiesChanged.next(this.technologies.slice());
	}
}
