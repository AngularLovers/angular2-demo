/* 
 * Angular
 */
import {
  Component
} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

/* 
 * We're using Webpack to load our CSS which is why we use `require` instead of
 * `import` here
 */
require('../css/styles.css');
require('../images/favicon.ico');

/* 
 * Our Demos
 */
import {DemoFormSku} from
  './forms/demo_form_sku';

/*
 * Webpack
 */
@Component({
  selector: 'forms-demo-app',
  directives: [DemoFormSku,],
  template: `
<div>
  <demo-form-sku></demo-form-sku>
</div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
