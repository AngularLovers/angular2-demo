import {Component} from "@angular/core";
import {Hero} from "./../../model/HeroModel";

@Component({
    selector: 'validate-form',
    template: require('./ValidateForm.html')
})
export class ValidateFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    active = true;

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}