import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'app-root',
	template: `
    <div class="container">
			<h1>ANIMALS</h1>
			<animal-list [childAnimalList]='masterAnimalList' (clickSender)='editAnimal($event)'></animal-list>
				<ul *ngFor="let animal of childAnimalList">
					<li><h2>Name: {{name}}</h2>
					<li><p>Species: {{species}}</p></li>
					<li><p>Age: {{age}}</p></li>
					<li><p>Diet: {{diet}}</p></li>
					<li><p>Location: {{location}}</p></li>
					<li><p>Caretakers: {{caretakers}}</p></li>
					<li><p>Sex: {{sex}}</p></li>
					<li><p>Likes: {{likes}}</p></li>
					<li><p>Dislikes: {{dislikes}}</p></li>
				</ul>
		</div>
  `
})

export class AppComponent {
	currentFocus: string = 'New Animals';
	selectedAnimal: Animal = null;

	masterAnimalList: Animal[] = [
	];

	editAnimal(clickedAnimal) {
		this.selectedAnimal = clickedAnimal;
	};

	finishedEditing() {
		this.selectedAnimal = null;
	}

	addAnimal(newAnimalFromChild: Animal) {
		this.masterAnimalList.push(newAnimalFromChild);
	}
}
