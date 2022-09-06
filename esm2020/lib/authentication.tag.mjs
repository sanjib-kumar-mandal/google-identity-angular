import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth-config";
import * as i2 from "./authentication.service";
export class AuthenticationTag {
    constructor(authConfigurationProvider, ngZone, authenticationInvoke) {
        this.authConfigurationProvider = authConfigurationProvider;
        this.ngZone = ngZone;
        this.authenticationInvoke = authenticationInvoke;
        this.onResponse = new EventEmitter();
    }
    handleCredentialResponse(event) { this.ngZone.run(() => this.onResponse.emit(event)); }
    async ngAfterViewInit() {
        await this.authenticationInvoke.loadScript();
        setTimeout(() => {
            google.accounts.id.initialize({ client_id: this.authConfigurationProvider.config.google_client_id, callback: this.handleCredentialResponse });
            google.accounts.id.renderButton(this.button.nativeElement, this.authConfigurationProvider.config.google_button_theme ?? {});
            if (this.authConfigurationProvider.config.google_options?.is_one_tap_when_button_visible) {
                google.accounts.id.prompt();
            }
        }, 100);
    }
}
AuthenticationTag.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationTag, deps: [{ token: i1.AuthConfigurationProvider }, { token: i0.NgZone }, { token: i2.AuthenticationInvoke }], target: i0.ɵɵFactoryTarget.Component });
AuthenticationTag.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: AuthenticationTag, selector: "google", outputs: { onResponse: "onResponse" }, viewQueries: [{ propertyName: "button", first: true, predicate: ["button"], descendants: true, read: ElementRef }], ngImport: i0, template: `<div class="google-stable-button"><div class="google-button-crust"><div #button></div></div></div>`, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationTag, decorators: [{
            type: Component,
            args: [{ selector: 'google', template: `<div class="google-stable-button"><div class="google-button-crust"><div #button></div></div></div>` }]
        }], ctorParameters: function () { return [{ type: i1.AuthConfigurationProvider }, { type: i0.NgZone }, { type: i2.AuthenticationInvoke }]; }, propDecorators: { button: [{
                type: ViewChild,
                args: ['button', { read: ElementRef, static: false }]
            }], onResponse: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24udGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ29vZ2xlLWlkZW50aXR5LWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvYXV0aGVudGljYXRpb24udGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVc5RyxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBQXFCLHlCQUFvRCxFQUFVLE1BQWMsRUFBVSxvQkFBMEM7UUFBaEksOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBRDNJLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQzBHLENBQUM7SUFDbEosd0JBQXdCLENBQUMsS0FBMkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNySCxLQUFLLENBQUMsZUFBZTtRQUNuQixNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7WUFDN0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDLENBQUM7WUFDNUgsSUFBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSw4QkFBOEIsRUFBQztnQkFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUFFO1FBQzFILENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7OzhHQVpVLGlCQUFpQjtrR0FBakIsaUJBQWlCLGtLQUNBLFVBQVUsNkJBSjVCLG9HQUFvRzsyRkFHbkcsaUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLFFBQVEsWUFDUixvR0FBb0c7d0tBSXRELE1BQU07c0JBQTdELFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDO2dCQUM1QyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhDb25maWd1cmF0aW9uUHJvdmlkZXIsIEdvb2dsZUJ1dHRvblJlc3BvbnNlIH0gZnJvbSAnLi9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkludm9rZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmRlY2xhcmUgY29uc3QgZ29vZ2xlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvb2dsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImdvb2dsZS1zdGFibGUtYnV0dG9uXCI+PGRpdiBjbGFzcz1cImdvb2dsZS1idXR0b24tY3J1c3RcIj48ZGl2ICNidXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aC1jb25maWcuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uVGFnIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbicsIHtyZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlfSkgYnV0dG9uITogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIG9uUmVzcG9uc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYXV0aENvbmZpZ3VyYXRpb25Qcm92aWRlcjogQXV0aENvbmZpZ3VyYXRpb25Qcm92aWRlciwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBhdXRoZW50aWNhdGlvbkludm9rZTogQXV0aGVudGljYXRpb25JbnZva2UpIHsgfVxuICBwcml2YXRlIGhhbmRsZUNyZWRlbnRpYWxSZXNwb25zZShldmVudDogR29vZ2xlQnV0dG9uUmVzcG9uc2UpIHsgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMub25SZXNwb25zZS5lbWl0KGV2ZW50KSk7IH1cbiAgYXN5bmMgbmdBZnRlclZpZXdJbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25JbnZva2UubG9hZFNjcmlwdCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ29vZ2xlLmFjY291bnRzLmlkLmluaXRpYWxpemUoe2NsaWVudF9pZDogdGhpcy5hdXRoQ29uZmlndXJhdGlvblByb3ZpZGVyLmNvbmZpZy5nb29nbGVfY2xpZW50X2lkLCBjYWxsYmFjazogdGhpcy5oYW5kbGVDcmVkZW50aWFsUmVzcG9uc2UgfSk7XG4gICAgICBnb29nbGUuYWNjb3VudHMuaWQucmVuZGVyQnV0dG9uKHRoaXMuYnV0dG9uLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYXV0aENvbmZpZ3VyYXRpb25Qcm92aWRlci5jb25maWcuZ29vZ2xlX2J1dHRvbl90aGVtZSA/PyB7fSk7XG4gICAgICBpZih0aGlzLmF1dGhDb25maWd1cmF0aW9uUHJvdmlkZXIuY29uZmlnLmdvb2dsZV9vcHRpb25zPy5pc19vbmVfdGFwX3doZW5fYnV0dG9uX3Zpc2libGUpeyBnb29nbGUuYWNjb3VudHMuaWQucHJvbXB0KCk7IH1cbiAgICB9LCAxMDApO1xuICB9XG59XG4iXX0=