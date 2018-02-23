import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'animal-list',
	template: `
	<select (change)="onChange($event.target.value)">
		<option value="allAnimals">All Animals</option>
		<option value="matureAnimals">Mature Animals</option>
		<option value="juvenileAnimals" selected="selected">Juvenile Animals</option>
	</select>
	<ul *ngFor="let animal of childAnimalList" (click)="isAdmitted(currentAnimal)">
		<li><h2>Species: {{species}}</h2></li>
		<li><p>Name: {{name}}</p></li>
		<li><p>Name: {{name}}</p></li>
		<li><p>Age: {{age}}</p></li>
		<li><p>Diet: {{diet}}</p></li>
		<li><p>Location: {{location}}</p></li>
		<li><p>Caretakers: {{caretakers}}</p></li>
		<li><p>Sex: {{sex}}</p></li>
		<li><p>Likes: {{likes}}</p></li>
		<li><p>Dislikes: {{dislikes}}</p></li>
		<input *ngIf="currentAnimal.admitted === true" type="checkbox" checked (click)="toggleAdmitted(currentAnimal, false)"/>
		<input *ngIf="currentAnimal.admitted === false" type="checkbox" (click)="toggleAdmitted(currentAnimal, true)"/><label>Check if Juvenile (Under 2 years)</label><br>
		<button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button><br>
	</ul>
  `
})

export class AnimalListComponent {
	@Input() childAnimalList: Animal[];
	@Output() clickSender = new EventEmitter();

	onChange(optionFromMenu) {
		this.filterByCompleteness = optionFromMenu;
	}

	toggleDone(clickedAnimal: Animal, setCompleteness: boolean) {
		clickedAnimal.admitted = setCompleteness;
	}

	editButtonHasBeenClicked(animalToEdit: Animal) {
		this.clickSender.emit(animalToEdit);
	}

	filterByCompleteness: string = "incompleteAnimals";

	isDone(clickedAnimal: Animal) {
		if (clickedAnimal.admitted === true) {
			console.log("This animal has been admitted.");
		} else {
			console.log("This animal is not yet admitted.");
		}
	}

	priorityColor(currentAnimal) {
		if (currentAnimal.priority === 3) {
			return "bg-danger";
		} else if (currentAnimal.priority === 2) {
			return "bg-warning";
		} else {
			return "bg-info";
		}
	}

}


/* * * * * * * * * * LABEL * * * * * * * * * */
