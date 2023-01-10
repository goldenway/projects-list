import { Injectable } from "@angular/core";
import { Technology } from "../shared/technology.model";

@Injectable({
	providedIn: 'root'
})
export class TechnologiesService {
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
	}
}
