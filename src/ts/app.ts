/* 
 * Angular
 */
import {Component} from '@angular/core'; 
import { bootstrap } from '@angular/platform-browser-dynamic';

import {BasicFormComponent} from './component/forms/BasicForm';
import {BasicComponent} from './component/basic/Basic';
import {NgForComponent} from './component/ngFor/NgFor';
import {ClickEventComponent} from './component/clickEvent/ClickEvent';
import {ComponentsComponent} from './component/components/Components';

require('../images/favicon.ico');

@Component({
    selector: 'my-app',
    styles:[require('./App.scss')],
    directives: [
        BasicFormComponent,
        BasicComponent,
        NgForComponent,
        ClickEventComponent,
        ComponentsComponent
    ],
    template: require('./App.html')
})
class MyApp {
}

bootstrap(MyApp);
