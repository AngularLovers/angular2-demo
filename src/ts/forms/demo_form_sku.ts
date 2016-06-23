import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'demo-form-sku',
  directives: [FORM_DIRECTIVES],
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: Sku</h2>
    <form #f="ngForm"
          (ngSubmit)="onSubmit(f.value)"
          class="ui form">

      <div class="field">
        <label for="skuInput">SKU</label>
        <input type="text"
               id="skuInput"
               placeholder="SKU"
               ngControl="sku">
      </div>

      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `
})
export class DemoFormSku {
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
