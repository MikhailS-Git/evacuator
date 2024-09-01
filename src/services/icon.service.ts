import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Регистрация кастомных иконок (используем через <mat-icon svgIcon=''>)
 */
@Injectable({
  providedIn: 'root',
})
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitize: DomSanitizer
  ) {}

  /** Регистрация кастомных иконок */
  registerIcons() {
    this.matIconRegistry.addSvgIcon(
      'logo-main',
      this.sanitize.bypassSecurityTrustResourceUrl(
        'assets/icons/logo/logo-main.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
        'evacuator-loaded',
        this.sanitize.bypassSecurityTrustResourceUrl(
          'assets/icons/evacuator-loaded.svg'
        )
    );
    this.matIconRegistry.addSvgIcon(
        'phone',
        this.sanitize.bypassSecurityTrustResourceUrl(
          'assets/icons/phone.svg'
        )
    );
    this.matIconRegistry.addSvgIcon(
        'fax',
        this.sanitize.bypassSecurityTrustResourceUrl(
          'assets/icons/fax.svg'
        )
    );
    this.matIconRegistry.addSvgIcon(
        'chevron-down',
        this.sanitize.bypassSecurityTrustResourceUrl(
          'assets/icons/chevron-down.svg'
        )
    );
    this.matIconRegistry.addSvgIcon(
        'map-point',
        this.sanitize.bypassSecurityTrustResourceUrl(
          'assets/icons/map-point.svg'
        )
    );
    this.matIconRegistry.addSvgIcon(
        'checkbox-false',
        this.sanitize.bypassSecurityTrustResourceUrl(
          'assets/icons/checkbox-false.svg'
        )
    );
    this.matIconRegistry.addSvgIcon(
        'checkbox-true',
        this.sanitize.bypassSecurityTrustResourceUrl(
          'assets/icons/checkbox-true.svg'
        )
    );
    this.matIconRegistry.addSvgIcon(
        'list-checkmark',
        this.sanitize.bypassSecurityTrustResourceUrl(
          'assets/icons/list-checkmark.svg'
        )
    );
  }
}