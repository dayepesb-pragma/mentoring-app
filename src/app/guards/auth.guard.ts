import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SpaPropsService } from '../services/spa-props.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _service = inject(SpaPropsService);
  return _service.isLogged;
};
