import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { Injectable, EventEmitter, ElementRef, Component, ViewChild, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class AuthConfiguration {
}
class AuthConfigurationProvider {
}
AuthConfigurationProvider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthConfigurationProvider, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthConfigurationProvider.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthConfigurationProvider, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthConfigurationProvider, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
class DefaultAuthConfiguration extends AuthConfigurationProvider {
    get config() {
        return {
            google_client_id: '',
            google_options: {
                is_one_tap: false,
                is_one_tap_when_button_visible: false
            }
        };
    }
}
DefaultAuthConfiguration.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DefaultAuthConfiguration, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
DefaultAuthConfiguration.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DefaultAuthConfiguration, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DefaultAuthConfiguration, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
class AuthInitialConfiguration {
}

const url = 'https://accounts.google.com/gsi/client';
class AuthenticationInvoke {
    // get required references
    constructor(authConfigurationProvider) {
        this.authConfigurationProvider = authConfigurationProvider;
    }
    // load script
    loadScript() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const scriptTags = yield document.head.getElementsByTagName('script');
            for (let i = 0; i < scriptTags.length; i++) {
                if (scriptTags[i].src === url) {
                    resolve();
                    return;
                }
            }
            const node = document.createElement('script');
            node.src = url;
            node.async = true;
            node.defer = true;
            node.type = 'text/javascript';
            document.head.appendChild(node);
            resolve();
        }));
    }
    /**
     * View one tap
     * @param notification - After opening the prompt you will receive a notification which you canAccess via various methods
     * @param response - after submitting by the user you can proceed to next step
     */
    viewOneTap(notification, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadScript();
            if ((_a = this.authConfigurationProvider.config.google_options) === null || _a === void 0 ? void 0 : _a.is_one_tap) {
                setTimeout(() => {
                    google.accounts.id.initialize({ client_id: this.authConfigurationProvider.config.google_client_id, callback: response });
                    google.accounts.id.prompt((notify) => { notification(notify); });
                }, 100);
            }
        });
    }
    /**
     * You can cancel the One Tap flow if you remove the prompt from the relying party DOM.
     * The cancel operation is ignored if a credential is already selected.
     */
    cancelOneTap() {
        google.accounts.id.cancel();
    }
    /**
     * When the user signs out of your website,
     * you need to call the method google.accounts.id.disableAutoSelect to record the status in cookies.
     */
    disableAutoSelect() {
        google.accounts.id.disableAutoSelect();
    }
    /**
     * This method is a simple wrapper for the store() method of the browser's native credential manager API.
     * Therefore, it can only be used to store a password credential.
     * @param credential - any
     * @param callback - Function
     */
    storeCredential(credential, callback) {
        google.accounts.id.storeCredential(credential, callback);
    }
    /**
     * This method evokes the OAuth grant used to share the ID token for the specified user.
     * @param hint - string
     * @param callback - Function
     */
    revoke(hint, callback) {
        google.accounts.id.revoke(hint, (done) => { callback(done); });
    }
}
AuthenticationInvoke.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationInvoke, deps: [{ token: AuthConfigurationProvider }], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationInvoke.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationInvoke, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationInvoke, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: AuthConfigurationProvider }]; } });

class AuthenticationTag {
    constructor(authConfigurationProvider, ngZone, authenticationInvoke) {
        this.authConfigurationProvider = authConfigurationProvider;
        this.ngZone = ngZone;
        this.authenticationInvoke = authenticationInvoke;
        this.onResponse = new EventEmitter();
    }
    handleCredentialResponse(event) { this.ngZone.run(() => this.onResponse.emit(event)); }
    ngAfterViewInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.authenticationInvoke.loadScript();
            setTimeout(() => {
                var _a, _b;
                google.accounts.id.initialize({ client_id: this.authConfigurationProvider.config.google_client_id, callback: this.handleCredentialResponse });
                google.accounts.id.renderButton(this.button.nativeElement, (_a = this.authConfigurationProvider.config.google_button_theme) !== null && _a !== void 0 ? _a : {});
                if ((_b = this.authConfigurationProvider.config.google_options) === null || _b === void 0 ? void 0 : _b.is_one_tap_when_button_visible) {
                    google.accounts.id.prompt();
                }
            }, 100);
        });
    }
}
AuthenticationTag.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationTag, deps: [{ token: AuthConfigurationProvider }, { token: i0.NgZone }, { token: AuthenticationInvoke }], target: i0.ɵɵFactoryTarget.Component });
AuthenticationTag.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: AuthenticationTag, selector: "google", outputs: { onResponse: "onResponse" }, viewQueries: [{ propertyName: "button", first: true, predicate: ["button"], descendants: true, read: ElementRef }], ngImport: i0, template: `<div class="google-stable-button"><div class="google-button-crust"><div #button></div></div></div>`, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationTag, decorators: [{
            type: Component,
            args: [{ selector: 'google', template: `<div class="google-stable-button"><div class="google-button-crust"><div #button></div></div></div>` }]
        }], ctorParameters: function () { return [{ type: AuthConfigurationProvider }, { type: i0.NgZone }, { type: AuthenticationInvoke }]; }, propDecorators: { button: [{
                type: ViewChild,
                args: ['button', { read: ElementRef, static: false }]
            }], onResponse: [{
                type: Output
            }] } });

class GoogleIdentityModule {
    static init(authConfig) {
        return {
            ngModule: GoogleIdentityModule,
            providers: [
                authConfig.config || {
                    provide: AuthConfigurationProvider,
                    useClass: DefaultAuthConfiguration
                }
            ],
        };
    }
}
GoogleIdentityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: GoogleIdentityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GoogleIdentityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: GoogleIdentityModule, declarations: [AuthenticationTag], imports: [CommonModule], exports: [AuthenticationTag] });
GoogleIdentityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: GoogleIdentityModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: GoogleIdentityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AuthenticationTag
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        AuthenticationTag
                    ]
                }]
        }] });

/*
 * Public API Surface of google-identity-authentication
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthConfiguration, AuthConfigurationProvider, AuthInitialConfiguration, AuthenticationInvoke, AuthenticationTag, DefaultAuthConfiguration, GoogleIdentityModule };
//# sourceMappingURL=google-identity-angular.mjs.map
