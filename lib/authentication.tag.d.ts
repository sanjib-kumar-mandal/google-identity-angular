import { ElementRef, AfterViewInit, EventEmitter, NgZone } from '@angular/core';
import { AuthConfigurationProvider } from './auth-config';
import { AuthenticationInvoke } from './authentication.service';
import * as i0 from "@angular/core";
export declare class AuthenticationTag implements AfterViewInit {
    private authConfigurationProvider;
    private ngZone;
    private authenticationInvoke;
    button: ElementRef;
    onResponse: EventEmitter<any>;
    constructor(authConfigurationProvider: AuthConfigurationProvider, ngZone: NgZone, authenticationInvoke: AuthenticationInvoke);
    private handleCredentialResponse;
    ngAfterViewInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthenticationTag, "google", never, {}, { "onResponse": "onResponse"; }, never, never, false>;
}
