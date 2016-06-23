import {Component} from '@angular/core';

@Component({
    selector: 'basic',
    styles:[require('./basic.scss')],
    template: require('./basic.html')
})

export class BasicComponent {
    name:string;
    constructor() {
        this.name = 'xiaomo';
    };
}
