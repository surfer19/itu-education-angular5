import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  public visible: boolean;
  public orange: boolean;
  public blue: boolean;
  public pink: boolean;
  public green: boolean;

  constructor() {
    this.visible = false;
    this.orange = false;
    console.log('service false constr');
    this.blue = false;
    this.pink = false;
    this.green = false;
  }
  public reset() {
    this.orange = false;
    this.blue = false;
    this.pink = false;
    this.green = false;
  }
  public hide() { this.visible = false; }

  public show() { this.visible = true; }

  public toggle() { this.visible = !this.visible; }

  // setters for nav color
  public setOrange() { this.orange = true; console.log('serv setOR()', this.orange); }

  public setBlue() { this.blue = true; }

  public setPink() { this.pink = true; }

  public setGreen() { this.green = true; }
}
