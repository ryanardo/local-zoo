import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
	name: "completeness",
	pure: false
})

export class CompletenessPipe implements PipeTransform {

	transform(input: Animal[], desiredCompleteness) {

	}
}
