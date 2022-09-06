# GoogleIdentityAuthentication

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

# Google Identity

This library is depend on [Google Identity](https://developers.google.com/identity/gsi/web).


# Code sniffet

```
import { GoogleIdentityModule } from 'projects/google-identity-authentication/src/lib/authentication.module';
...

export class ConfigFromApp implements AuthConfigurationProvider {
  get config(): AuthConfiguration {
    return { 
      google_client_id: '446495613770-ag72d7u6rjgs8qhjkjq92ca4mu2ict1e.apps.googleusercontent.com',
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