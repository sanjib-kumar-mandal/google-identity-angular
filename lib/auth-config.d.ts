import { Provider } from "@angular/core";
import * as i0 from "@angular/core";
export declare class AuthConfiguration {
    google_client_id: string | undefined;
    google_button_theme?: GoogleButtonTheme;
    google_options?: GoogleOptions;
}
export declare abstract class AuthConfigurationProvider {
    abstract get config(): AuthConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthConfigurationProvider, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthConfigurationProvider>;
}
export declare class DefaultAuthConfiguration extends AuthConfigurationProvider {
    get config(): AuthConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultAuthConfiguration, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DefaultAuthConfiguration>;
}
export declare class AuthInitialConfiguration {
    config?: Provider;
}
export interface GoogleButtonTheme {
    type?: 'icon' | 'standard';
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    logo_alignment?: 'left' | 'center';
    width?: number;
}
export interface GoogleOptions {
    is_one_tap: boolean;
    is_one_tap_when_button_visible: boolean;
}
export interface GoogleButtonResponse {
    [key: string]: string;
}
