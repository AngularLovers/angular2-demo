/* 
 * Angular
 */
import { Component } from '@angular/core';

import { BasicComponent } from './component/basic/Basic';
import { NgTagComponent } from './component/ngTag/NgTag';
import { ClickEventComponent } from './component/clickEvent/ClickEvent';
import { ComponentsComponent } from './component/components/Components';
import { HostPropertyComponent } from './component/hostProperty/HostProperty';
import { ValidateFormComponent } from './component/validateForm/validateForm';
import { HttpServiceComponent } from './component/httpService/HttpService';
import { KeyupEventComponent } from './component/keyupEvent/KeyupEvent';
import { EnterBlurEventComponent } from './component/enterBlurEvent/EnterBlurEvent';

require('../images/favicon.ico');

@Component({
    selector: 'my-app',
    styles:[require('./App.scss')],
    directives: [
        BasicComponent,
        NgTagComponent,
        ClickEventComponent,
        ComponentsComponent,
        HostPropertyComponent,
        ValidateFormComponent,
        HttpServiceComponent,
        KeyupEventComponent,
        EnterBlurEventComponent
    ],
    template: require('./App.html')
})
export class AppComponent {
}

