/* 
 * Angular
 */
import {Component} from '@angular/core'; 
import { bootstrap } from '@angular/platform-browser-dynamic';

import {BasicFormComponent} from './component/forms/BasicForm';
import {BasicComponent} from './component/basic/Basic';
import {NgTagComponent} from './component/ngTag/NgTag';
import {ClickEventComponent} from './component/clickEvent/ClickEvent';
import {ComponentsComponent} from './component/components/Components';
import {HostPropertyComponent} from './component/hostProperty/HostProperty';

require('../images/favicon.ico');

@Component({
    selector: 'my-app',
    styles:[require('./App.scss')],
    directives: [
        BasicFormComponent,
        BasicComponent,
        NgTagComponent,
        ClickEventComponent,
        ComponentsComponent,
        HostPropertyComponent
    ],
    template: require('./App.html')
})
class MyApp {
}

bootstrap(MyApp);
