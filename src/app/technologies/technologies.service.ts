import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Technology } from "../shared/technology.model";

@Injectable({
	providedIn: 'root'
})
export class TechnologiesService {
	technologiesChanged = new Subject<Technology[]>();
	private technologies: Technology[] = [
		new Technology('JavaScript', 5),
		new Technology('HTML5', 5),
		new Technology('Angular', 4)
	];

	getTechnologies(): Technology[] {
		return this.technologies;
	}

	addTechnology(technology: Technology) {
		this.technologies.push(technology);
		this.technologiesChanged.next(this.technologies.slice());
	}

	recalculateTechnologies(technologies: Technology[]) {
		this.technologies.push(...technologies);
		this.technologiesChanged.next(this.technologies.slice());
	}
}
