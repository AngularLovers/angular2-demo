import {Component} from '@angular/core';
import {FORM_DIRECTIVES,FormBuilder,ControlGroup} from '@angular/common';



@Component({
    selector: 'basic-form',
    styles:[require('./BasicForm.scss')],
    template: require('./BasicForm.html'),
    directives: [FORM_DIRECTIVES]

})
export class BasicFormComponent {

    myForm:ControlGroup;

    constructor(fb:FormBuilder) {
        this.myForm = fb.group({
            'age':[25]
        });
    }

    onSubmit(form:any):void {
        console.log('you submitted value:', form);
    }
}
