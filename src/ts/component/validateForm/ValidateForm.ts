import { Component } from '@angular/core';
import {
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Validators
} from '@angular/common';

@Component({
    selector: 'validate-form',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    styles:[require('./ValidateForm.scss')],
    template: require('./ValidateForm.html')
})
export class ValidateFormComponent {
    myForm:ControlGroup;
    productName:string;

    constructor(fb:FormBuilder) {
        this.myForm = fb.group({
            'productName': ['', Validators.required]
        });
    }

    onSubmit(value:string):void {
        console.log('you submitted value: ', value);
    }
}
