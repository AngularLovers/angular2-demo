/* 
 * Angular
 */
import {Component} from '@angular/core'; 
import { bootstrap } from '@angular/platform-browser-dynamic';

import {BasicFormComponent} from './forms/basic-form';
import {BasicComponent} from './basic/basic';

require('../images/favicon.ico');

@Component({
    selector: 'basic-form',
    directives: [BasicFormComponent,BasicComponent],
    styles:[
        require('./app.scss')
    ],
    template: require('./app.html')
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
