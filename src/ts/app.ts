/* 
 * Angular
 */
import {Component} from '@angular/core'; 
import { bootstrap } from '@angular/platform-browser-dynamic';

import {BasicFormComponent} from './forms/basic-form';
import {BasicComponent} from './basic/basic';

require('../images/favicon.ico');
require('./app.scss');

@Component({
    selector: 'my-app',
    directives: [BasicFormComponent,BasicComponent],
    template: require('./app.html')
})
class MyApp {
}

bootstrap(MyApp);
