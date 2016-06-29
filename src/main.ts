import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {AppComponent} from "./ts/app";
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
])
    .catch((err:any) => console.error(err));
