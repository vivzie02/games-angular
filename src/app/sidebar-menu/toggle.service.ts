import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }

  private _isExpanded: boolean = false;

  toggleSideNav(){
    this._isExpanded = !this._isExpanded;
  }

  public get isExpanded(): boolean{
    return this._isExpanded;
  }
}
