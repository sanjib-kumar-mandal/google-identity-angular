import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth-config";
const url = 'https://accounts.google.com/gsi/client';
export class AuthenticationInvoke {
    // get required references
    constructor(authConfigurationProvider) {
        this.authConfigurationProvider = authConfigurationProvider;
    }
    // load script
    loadScript() {
        return new Promise(async (resolve) => {
            const scriptTags = await document.head.getElementsByTagName('script');
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
        });
    }
    /**
     * View one tap
     * @param notification - After opening the prompt you will receive a notification which you canAccess via various methods
     * @param response - after submitting by the user you can proceed to next step
     */
    async viewOneTap(notification, response) {
        await this.loadScript();
        if (this.authConfigurationProvider.config.google_options?.is_one_tap) {
            setTimeout(() => {
                google.accounts.id.initialize({ client_id: this.authConfigurationProvider.config.google_client_id, callback: response });
                google.accounts.id.prompt((notify) => { notification(notify); });
            }, 100);
        }
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
AuthenticationInvoke.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationInvoke, deps: [{ token: i1.AuthConfigurationProvider }], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationInvoke.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationInvoke, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: AuthenticationInvoke, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AuthConfigurationProvider }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2dvb2dsZS1pZGVudGl0eS1hdXRoZW50aWNhdGlvbi9zcmMvbGliL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRzNDLE1BQU0sR0FBRyxHQUFHLHdDQUF3QyxDQUFDO0FBT3JELE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsMEJBQTBCO0lBQzFCLFlBQW9CLHlCQUFvRDtRQUFwRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQUksQ0FBQztJQUU3RSxjQUFjO0lBQ2QsVUFBVTtRQUNSLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQVksRUFBRSxFQUFFO1lBQ3hDLE1BQU0sVUFBVSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtvQkFDNUIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsT0FBTztpQkFDUjthQUNGO1lBQ0QsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFzQixFQUFFLFFBQWtCO1FBQ3pELE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLElBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFO1lBQ25FLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ3hILE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWTtRQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUI7UUFDZixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGVBQWUsQ0FBQyxVQUFlLEVBQUUsUUFBa0I7UUFDakQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxJQUFZLEVBQUUsUUFBa0I7UUFDckMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7aUhBekVVLG9CQUFvQjtxSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07MkZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhDb25maWd1cmF0aW9uUHJvdmlkZXIgfSBmcm9tICcuL2F1dGgtY29uZmlnJztcblxuY29uc3QgdXJsID0gJ2h0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9nc2kvY2xpZW50JztcblxuZGVjbGFyZSBsZXQgZ29vZ2xlOiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uSW52b2tlIHtcbiAgXG4gIC8vIGdldCByZXF1aXJlZCByZWZlcmVuY2VzXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aENvbmZpZ3VyYXRpb25Qcm92aWRlcjogQXV0aENvbmZpZ3VyYXRpb25Qcm92aWRlcikgeyB9XG5cbiAgLy8gbG9hZCBzY3JpcHRcbiAgbG9hZFNjcmlwdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBzY3JpcHRUYWdzID0gYXdhaXQgZG9jdW1lbnQuaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2NyaXB0VGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihzY3JpcHRUYWdzW2ldLnNyYyA9PT0gdXJsKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgbm9kZS5zcmMgPSB1cmw7XG4gICAgICBub2RlLmFzeW5jID0gdHJ1ZTtcbiAgICAgIG5vZGUuZGVmZXIgPSB0cnVlO1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpZXcgb25lIHRhcFxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uIC0gQWZ0ZXIgb3BlbmluZyB0aGUgcHJvbXB0IHlvdSB3aWxsIHJlY2VpdmUgYSBub3RpZmljYXRpb24gd2hpY2ggeW91IGNhbkFjY2VzcyB2aWEgdmFyaW91cyBtZXRob2RzXG4gICAqIEBwYXJhbSByZXNwb25zZSAtIGFmdGVyIHN1Ym1pdHRpbmcgYnkgdGhlIHVzZXIgeW91IGNhbiBwcm9jZWVkIHRvIG5leHQgc3RlcFxuICAgKi9cbiAgYXN5bmMgdmlld09uZVRhcChub3RpZmljYXRpb246IEZ1bmN0aW9uLCByZXNwb25zZTogRnVuY3Rpb24pIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoKTtcbiAgICBpZih0aGlzLmF1dGhDb25maWd1cmF0aW9uUHJvdmlkZXIuY29uZmlnLmdvb2dsZV9vcHRpb25zPy5pc19vbmVfdGFwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ29vZ2xlLmFjY291bnRzLmlkLmluaXRpYWxpemUoe2NsaWVudF9pZDogdGhpcy5hdXRoQ29uZmlndXJhdGlvblByb3ZpZGVyLmNvbmZpZy5nb29nbGVfY2xpZW50X2lkLCBjYWxsYmFjazogcmVzcG9uc2UgfSk7XG4gICAgICAgIGdvb2dsZS5hY2NvdW50cy5pZC5wcm9tcHQoKG5vdGlmeTogYW55KSA9PiB7IG5vdGlmaWNhdGlvbihub3RpZnkpOyB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2FuY2VsIHRoZSBPbmUgVGFwIGZsb3cgaWYgeW91IHJlbW92ZSB0aGUgcHJvbXB0IGZyb20gdGhlIHJlbHlpbmcgcGFydHkgRE9NLiBcbiAgICogVGhlIGNhbmNlbCBvcGVyYXRpb24gaXMgaWdub3JlZCBpZiBhIGNyZWRlbnRpYWwgaXMgYWxyZWFkeSBzZWxlY3RlZC5cbiAgICovXG4gIGNhbmNlbE9uZVRhcCgpIHtcbiAgICBnb29nbGUuYWNjb3VudHMuaWQuY2FuY2VsKCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgdXNlciBzaWducyBvdXQgb2YgeW91ciB3ZWJzaXRlLCBcbiAgICogeW91IG5lZWQgdG8gY2FsbCB0aGUgbWV0aG9kIGdvb2dsZS5hY2NvdW50cy5pZC5kaXNhYmxlQXV0b1NlbGVjdCB0byByZWNvcmQgdGhlIHN0YXR1cyBpbiBjb29raWVzLlxuICAgKi9cbiAgZGlzYWJsZUF1dG9TZWxlY3QoKSB7XG4gICAgZ29vZ2xlLmFjY291bnRzLmlkLmRpc2FibGVBdXRvU2VsZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgYSBzaW1wbGUgd3JhcHBlciBmb3IgdGhlIHN0b3JlKCkgbWV0aG9kIG9mIHRoZSBicm93c2VyJ3MgbmF0aXZlIGNyZWRlbnRpYWwgbWFuYWdlciBBUEkuIFxuICAgKiBUaGVyZWZvcmUsIGl0IGNhbiBvbmx5IGJlIHVzZWQgdG8gc3RvcmUgYSBwYXNzd29yZCBjcmVkZW50aWFsLlxuICAgKiBAcGFyYW0gY3JlZGVudGlhbCAtIGFueVxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBGdW5jdGlvblxuICAgKi9cbiAgc3RvcmVDcmVkZW50aWFsKGNyZWRlbnRpYWw6IGFueSwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgZ29vZ2xlLmFjY291bnRzLmlkLnN0b3JlQ3JlZGVudGlhbChjcmVkZW50aWFsLCBjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgZXZva2VzIHRoZSBPQXV0aCBncmFudCB1c2VkIHRvIHNoYXJlIHRoZSBJRCB0b2tlbiBmb3IgdGhlIHNwZWNpZmllZCB1c2VyLlxuICAgKiBAcGFyYW0gaGludCAtIHN0cmluZ1xuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBGdW5jdGlvblxuICAgKi9cbiAgcmV2b2tlKGhpbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgZ29vZ2xlLmFjY291bnRzLmlkLnJldm9rZShoaW50LCAoZG9uZTogYW55KSA9PiB7IGNhbGxiYWNrKGRvbmUpOyB9KTtcbiAgfVxufVxuIl19