import { ModuleWithProviders } from '@angular/core';
import { AuthInitialConfiguration } from './auth-config';
import * as i0 from "@angular/core";
import * as i1 from "./authentication.tag";
import * as i2 from "@angular/common";
export declare class GoogleIdentityModule {
    static init(authConfig: AuthInitialConfiguration): ModuleWithProviders<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GoogleIdentityModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GoogleIdentityModule, [typeof i1.AuthenticationTag], [typeof i2.CommonModule], [typeof i1.AuthenticationTag]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GoogleIdentityModule>;
}
