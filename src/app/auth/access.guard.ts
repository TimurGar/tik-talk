import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

export const canActivateAuth = () => {
    const LoggedIn = inject(AuthService).isAuth;

    if (LoggedIn) {
        return true;
    }

    return inject(Router).createUrlTree(['/login']);
}