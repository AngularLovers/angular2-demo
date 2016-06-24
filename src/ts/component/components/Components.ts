import {Component} from '@angular/core';
import {BasicComponent}  from './../basic/Basic';
import {ClickEventComponent} from './../clickEvent/ClickEvent';

@Component({
    selector:'components-component',
    styles:[require('Components.scss')],
    directives:[
        BasicComponent,
        ClickEventComponent
    ],
    template:require('Components.html')
})

export class ComponentsComponent{
}
