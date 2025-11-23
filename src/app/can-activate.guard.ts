import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedServicesService } from './shared-services.service';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const sharedService = inject(SharedServicesService);
  const router = inject(Router);
  if (!sharedService.loggedIn) {
    router.navigate(['unauthorized']);
    return false;
  }
  return true;
};
