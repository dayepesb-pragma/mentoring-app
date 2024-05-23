import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { singleSpaPropsSubject } from '../../single-spa/single-spa-props';

@Injectable({
  providedIn: 'root'
})
export class SpaPropsService {

  private _alertService: any = null;
  private _loadingService: any = null;
  private _userService: any = null;
  private _listService: any = null;
  private _isLogged: boolean = false;
  private _spaPropsSubscription: Subscription = new Subscription();
  singleSpaProps: {} = {};

  constructor() {
    this._spaPropsSubscription = singleSpaPropsSubject.subscribe(
      (props: any) => {
        this.singleSpaProps = props;
        this._alertService = props['alertService'];
        this._loadingService = props['loadingService'];
        this._userService = props['userService'];
        this._listService = props['listService'];
        this._isLogged = props['isLogged'];
      }
    );
  }

  get alertService(): any {
    return this._alertService;
  }

  get loadingService(): any {
    return this._loadingService;
  }

  get userService(): any {
    return this._userService;
  }

  get listService(): any {
    return this._listService;
  }

  get isLogged(): boolean {
    return this._isLogged;
  }
}
