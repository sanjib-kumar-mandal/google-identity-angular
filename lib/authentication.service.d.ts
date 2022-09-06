import { AuthConfigurationProvider } from './auth-config';
import * as i0 from "@angular/core";
export declare class AuthenticationInvoke {
    private authConfigurationProvider;
    constructor(authConfigurationProvider: AuthConfigurationProvider);
    loadScript(): Promise<any>;
    /**
     * View one tap
     * @param notification - After opening the prompt you will receive a notification which you canAccess via various methods
     * @param response - after submitting by the user you can proceed to next step
     */
    viewOneTap(notification: Function, response: Function): Promise<void>;
    /**
     * You can cancel the One Tap flow if you remove the prompt from the relying party DOM.
     * The cancel operation is ignored if a credential is already selected.
     */
    cancelOneTap(): void;
    /**
     * When the user signs out of your website,
     * you need to call the method google.accounts.id.disableAutoSelect to record the status in cookies.
     */
    disableAutoSelect(): void;
    /**
     * This method is a simple wrapper for the store() method of the browser's native credential manager API.
     * Therefore, it can only be used to store a password credential.
     * @param credential - any
     * @param callback - Function
     */
    storeCredential(credential: any, callback: Function): void;
    /**
     * This method evokes the OAuth grant used to share the ID token for the specified user.
     * @param hint - string
     * @param callback - Function
     */
    revoke(hint: string, callback: Function): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationInvoke, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthenticationInvoke>;
}
