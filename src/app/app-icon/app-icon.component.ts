import { Component, ChangeDetectionStrategy, ViewEncapsulation, HostBinding, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'as-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppIconComponent {

  @HostBinding('class.as-app-icon') componentClass = true;
  @HostBinding('class.as-app-icon-round') roundIconClass;

  @ViewChild('content') contentEl: HTMLDivElement;
  background: SafeStyle;

  @Input()
  set round(v: boolean) {
    this.roundIconClass = v;
  }
  get round() {
    return this.roundIconClass;
  }

  private _icon: string;
  @Input()
  set icon(v: string) {
    this._icon = v;
    this.background = this.sanitizer.bypassSecurityTrustStyle(`url("${v}")`);
  }
  get icon() {
    return this._icon;
  }

  constructor(
    private sanitizer: DomSanitizer
  ) { }

}
