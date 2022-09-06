import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class AuthConfiguration {
}
export class AuthConfigurationProvider {
}
AuthConfigurationProvider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthConfigurationProvider, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthConfigurationProvider.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthConfigurationProvider, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthConfigurationProvider, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
export class DefaultAuthConfiguration extends AuthConfigurationProvider {
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
export class AuthInitialConfiguration {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9nb29nbGUtaWRlbnRpdHktYXV0aGVudGljYXRpb24vc3JjL2xpYi9hdXRoLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDOztBQUVyRCxNQUFNLE9BQU8saUJBQWlCO0NBSTdCO0FBR0QsTUFBTSxPQUFnQix5QkFBeUI7O3NIQUF6Qix5QkFBeUI7MEhBQXpCLHlCQUF5QixjQURyQixNQUFNOzJGQUNWLHlCQUF5QjtrQkFEOUMsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7O0FBTWxDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSx5QkFBeUI7SUFDckUsSUFBSSxNQUFNO1FBQ1IsT0FBTztZQUNILGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsY0FBYyxFQUFFO2dCQUNaLFVBQVUsRUFBRSxLQUFLO2dCQUNqQiw4QkFBOEIsRUFBRSxLQUFLO2FBQ3hDO1NBQ0osQ0FBQztJQUNKLENBQUM7O3FIQVRVLHdCQUF3Qjt5SEFBeEIsd0JBQXdCLGNBRFgsTUFBTTsyRkFDbkIsd0JBQXdCO2tCQURwQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7QUFhbEMsTUFBTSxPQUFPLHdCQUF3QjtDQUVwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoQ29uZmlndXJhdGlvbiB7XHJcbiAgICBnb29nbGVfY2xpZW50X2lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBnb29nbGVfYnV0dG9uX3RoZW1lPzogR29vZ2xlQnV0dG9uVGhlbWU7XHJcbiAgICBnb29nbGVfb3B0aW9ucz86IEdvb2dsZU9wdGlvbnM7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdXRoQ29uZmlndXJhdGlvblByb3ZpZGVyIHtcclxuICBhYnN0cmFjdCBnZXQgY29uZmlnKCk6IEF1dGhDb25maWd1cmF0aW9uO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEF1dGhDb25maWd1cmF0aW9uIGV4dGVuZHMgQXV0aENvbmZpZ3VyYXRpb25Qcm92aWRlciB7XHJcbiAgZ2V0IGNvbmZpZygpOiBBdXRoQ29uZmlndXJhdGlvbiB7XHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBnb29nbGVfY2xpZW50X2lkOiAnJyxcclxuICAgICAgICBnb29nbGVfb3B0aW9uczoge1xyXG4gICAgICAgICAgICBpc19vbmVfdGFwOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNfb25lX3RhcF93aGVuX2J1dHRvbl92aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aEluaXRpYWxDb25maWd1cmF0aW9uIHtcclxuICAgIGNvbmZpZz86IFByb3ZpZGVyO1xyXG59XHJcblxyXG4vLyBpbnRlcmZhY2VzXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZUJ1dHRvblRoZW1lIHtcclxuICAgIHR5cGU/OiAnaWNvbicgfCAnc3RhbmRhcmQnO1xyXG4gICAgdGhlbWU/OiAnb3V0bGluZScgfCAnZmlsbGVkX2JsdWUnIHwgJ2ZpbGxlZF9ibGFjayc7XHJcbiAgICBzaXplPzogJ2xhcmdlJyB8ICdtZWRpdW0nIHwgJ3NtYWxsJztcclxuICAgIHRleHQ/OiAnc2lnbmluX3dpdGgnIHwgJ3NpZ251cF93aXRoJyB8ICdjb250aW51ZV93aXRoJyB8ICdzaWduaW4nO1xyXG4gICAgc2hhcGU/OiAncmVjdGFuZ3VsYXInIHwgJ3BpbGwnIHwgJ2NpcmNsZScgfCAnc3F1YXJlJztcclxuICAgIGxvZ29fYWxpZ25tZW50PzogJ2xlZnQnIHwgJ2NlbnRlcic7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVPcHRpb25zIHtcclxuICAgIGlzX29uZV90YXA6IGJvb2xlYW47XHJcbiAgICBpc19vbmVfdGFwX3doZW5fYnV0dG9uX3Zpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlQnV0dG9uUmVzcG9uc2Uge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59Il19