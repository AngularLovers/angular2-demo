import {Component} from '@angular/core';

@Component({
    selector: 'host-property',
    host:{
        class:'row'
    },
    styles:[require('./HostProperty.scss')],
    template: require('./HostProperty.html')
})

export class HostPropertyComponent {
}
