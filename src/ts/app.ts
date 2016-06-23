/* 
 * Angular
 */
import {Component} from '@angular/core'; 
import { bootstrap } from '@angular/platform-browser-dynamic';
import {DemoFormSku} from './forms/demo_form_sku';

require('bootstrap/dist/css/bootstrap.css');
require('../css/styles.css');
require('../images/favicon.ico');

@Component({
    selector: 'forms-demo-app',
    directives: [DemoFormSku],
    template: require('./app.html')
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
