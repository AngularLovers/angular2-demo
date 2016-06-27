import {Component} from '@angular/core';
import {BasicComponent} from './../basic/Basic';

@Component({
    selector:'click-event',
    styles:[require('./ClickEvent.scss')],
    template: require('./ClickEvent.html'),
    directives:[BasicComponent]
})

export class ClickEventComponent{
    showMsg():void{
        console.log('己经触发点击事件');
        alert('己经触发点击事件');
    }
}
