/* 
 * Angular
 */
import {Component} from '@angular/core'; 
import { bootstrap } from '@angular/platform-browser-dynamic';

import {BasicFormComponent} from './forms/BasicForm';
import {BasicComponent} from './basic/Basic';
import {NgForComponent} from './ngFor/NgFor';
import {ClickEventComponent} from './clickEvent/ClickEvent';
require('../images/favicon.ico');

@Component({
    selector: 'my-app',
    styles:[require('./App.scss')],
    directives: [
        BasicFormComponent,
        BasicComponent,
        NgForComponent,
        ClickEventComponent
    ],
    template: require('./App.html')
})
class MyApp {
}

bootstrap(MyApp);
