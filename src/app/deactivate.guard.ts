import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { SharedServicesService } from './shared-services.service';

export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const sharedService = inject(SharedServicesService);
  const router = inject(Router);

  if (sharedService.loggedIn) {
    let response  = confirm('Are you sure you want to logout?');
    console.log(response);
    return response;
  }
  return true;
};
