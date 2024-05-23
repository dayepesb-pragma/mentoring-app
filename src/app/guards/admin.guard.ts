import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SpaPropsService } from '../services/spa-props.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const _service = inject(SpaPropsService);
  const _router = inject(Router);
  if (!_service.userService.isMentorAdmin) {
    _router.navigate(['/dashboard/mentor']);
  }
  return _service.userService.isMentorAdmin;
};
