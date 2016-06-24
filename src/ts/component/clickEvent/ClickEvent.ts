import {Component} from '@angular/core';

@Component({
    selector:'click-event',
    styles:[require('./ClickEvent.scss')],
    template: require('./ClickEvent.html')
})

export class ClickEventComponent{
    showMsg():void{
        console.log('己经触发点击事件');
        alert('己经触发点击事件');
    }
}
