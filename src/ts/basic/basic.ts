import {Component} from '@angular/core';

require('./basic.scss');

@Component({
    selector: 'basic',
    template: require('./basic.html')
})

export class BasicComponent {
    name:string;
    constructor() {
        this.name = 'xiaomo';
    };
}
