import { NgModule } from '@angular/core';
import { AuthenticationTag } from './authentication.tag';
import { CommonModule } from '@angular/common';
import { AuthConfigurationProvider, DefaultAuthConfiguration } from './auth-config';
import * as i0 from "@angular/core";
export class GoogleIdentityModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ29vZ2xlLWlkZW50aXR5LWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQTRCLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWE5RyxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUUsVUFBb0M7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULFVBQVUsQ0FBQyxNQUFNLElBQUk7b0JBQ25CLE9BQU8sRUFBRSx5QkFBeUI7b0JBQ2xDLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ25DO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7aUhBWFUsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBVDdCLGlCQUFpQixhQUdqQixZQUFZLGFBR1osaUJBQWlCO2tIQUdSLG9CQUFvQixZQU43QixZQUFZOzJGQU1ILG9CQUFvQjtrQkFYaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3FCQUNsQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblRhZyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24udGFnJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoQ29uZmlndXJhdGlvblByb3ZpZGVyLCBBdXRoSW5pdGlhbENvbmZpZ3VyYXRpb24sIERlZmF1bHRBdXRoQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vYXV0aC1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBdXRoZW50aWNhdGlvblRhZ1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBdXRoZW50aWNhdGlvblRhZ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZUlkZW50aXR5TW9kdWxlIHtcbiAgc3RhdGljIGluaXQoIGF1dGhDb25maWc6IEF1dGhJbml0aWFsQ29uZmlndXJhdGlvbik6IE1vZHVsZVdpdGhQcm92aWRlcnM8R29vZ2xlSWRlbnRpdHlNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdvb2dsZUlkZW50aXR5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGF1dGhDb25maWcuY29uZmlnIHx8IHtcbiAgICAgICAgICBwcm92aWRlOiBBdXRoQ29uZmlndXJhdGlvblByb3ZpZGVyLFxuICAgICAgICAgIHVzZUNsYXNzOiBEZWZhdWx0QXV0aENvbmZpZ3VyYXRpb25cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=