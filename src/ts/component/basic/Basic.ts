import {Component} from '@angular/core';

@Component({
    selector: 'basic',
    styles:[require('./Basic.scss')],
    template: require('./Basic.html')
})

export class BasicComponent {
    name:string;
    constructor() {
        this.name = 'xiaomo';
    };
}
