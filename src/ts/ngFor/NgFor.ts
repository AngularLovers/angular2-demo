import {Component} from '@angular/core';

require('./ngFor.scss');

@Component({
    selector: 'ng-for',
    template: require('ngFor.html')
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
