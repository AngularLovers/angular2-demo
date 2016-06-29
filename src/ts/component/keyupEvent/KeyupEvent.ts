import { Component } from '@angular/core';

@Component({
    selector:'keyup-event',
    template: require('./KeyupEvent.html'),
    styles:[require('./KeyupEvent.scss')]
})

export class KeyupEventComponent {
    values:string = '';
    onKey(value:any):void {
        this.values += value + ' | ';
    }
}
