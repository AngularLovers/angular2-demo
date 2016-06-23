import {Component} from '@angular/core';
import {FORM_DIRECTIVES,FormBuilder,ControlGroup} from '@angular/common';
import 'demo-form-sku.scss';
@Component({
    selector: 'demo-form-sku',
    directives: [FORM_DIRECTIVES],
    template: require('./demo-form-sku.html')
})
export class DemoFormSku {

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
