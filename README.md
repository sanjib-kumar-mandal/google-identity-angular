# GoogleIdentityAuthentication

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

# Google Identity

This library is depend on [Google Identity](https://developers.google.com/identity/gsi/web).


# Install

```
npm i google-identity-angular
```

# Code sniffet

```
import { GoogleIdentityModule } from 'projects/google-identity-authentication/src/lib/authentication.module';
import {
  AuthConfiguration, 
  AuthConfigurationProvider,
} from 'projects/google-identity-authentication/src/lib/auth-config';
...

export class ConfigFromApp implements AuthConfigurationProvider {
  get config(): AuthConfiguration {
    return { 
      google_client_id: 'GOOGLE_CLIENT_ID',
      google_button_theme: {
        width: 140,
        text: 'signin',
        theme: 'filled_black'
      },
      google_options: {
        is_one_tap: true,
        is_one_tap_when_button_visible: false
      }
    };
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    GoogleIdentityModule.init({ config: { provide: AuthConfigurationProvider, useClass: ConfigFromApp } })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

```

# Use google button

```
<google (onResponse)="responsePrinter($event)"></google>
```