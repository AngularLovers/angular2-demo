import {Component} from '@angular/core';

@Component({
    selector: 'ng-for',
    styles:[require('./NgFor.scss')],
    template: require('NgFor.html')
})

export class NgForComponent {
    list:any;

    constructor() {
        this.list = [
            'xiaomo',
            'xiaogang',
            'xiaomoxue'
        ];
    };
}
