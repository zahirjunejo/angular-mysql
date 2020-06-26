import {
  OnInit,
  OnDestroy,
  ViewChild,
  Output,
  EventEmitter,
  Injector,
  AfterViewInit
} from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { environment } from '@platform-environments/environment';

export class ComponentBase implements OnInit, OnDestroy, AfterViewInit {
  isInitialized = true;
  isDialogInitialized = false;
  canInitializeDialogContent = false;

  @Output() closed = new EventEmitter<void>();
  @Output() oked = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  @ViewChild('form', { static: false }) protected form: NgForm;

  constructor(injector: Injector) {}

  async ngOnInit(): Promise<void> {
    this.isInitialized = false;
    await this.appOnInit();
    this.isInitialized = true;
  }

  async ngAfterViewInit(): Promise<void> {
    await this.appAfterViewInit();
  }

  protected async load() {
    await this.appDialogOnInit();
    this.isDialogInitialized = true;
    setTimeout(() => {
      this.canInitializeDialogContent = true;
    }, 100);
  }

  async open() {
    await this.load();
  }

  async ok(): Promise<void> {
    return Promise.resolve();
  }

  cancel() {
    this.close();
    this.cancelled.emit();
  }

  async close() {
    this.isDialogInitialized = false;
    this.canInitializeDialogContent = false;
    this.closed.emit();
  }

  async ngOnDestroy() {
    await this.appOnDestroy();
  }

  protected async appOnInit(): Promise<void> {
    return Promise.resolve();
  }

  protected async appAfterViewInit(): Promise<void> {
    return Promise.resolve();
  }

  protected async appOnDestroy(): Promise<void> {
    return Promise.resolve();
  }

  protected async appDialogOnInit(): Promise<void> {
    return Promise.resolve();
  }

  protected markAsTouched() {
    const formControls = Object.keys(this.form.controls).map(
      x => this.form.controls[x]
    );

    const controls: any[] = [];
    formControls.forEach(x => {
      const group = x as FormGroup;
      if (group && group.controls) {
        group.markAsTouched({ onlySelf: true });
        controls.push(
          ...Object.keys(group.controls).map(x => group.controls[x])
        );
      } else {
        controls.push(x);
      }
    });

    for (const control of controls) {
      control.markAsTouched({ onlySelf: true });
    }
  }

  async isValid(): Promise<boolean> {
    this.markAsTouched();
    return this.form.valid;
  }

  get isValidForm(): boolean {
    this.markAsTouched();
    return this.form.valid;
  }

  get companyApiUrl() {
    return environment.companyApiUrl;
  }

  get ssoApiUrl() {
    return environment.ssoApiUrl;
  }

  get integrationApiUrl() {
    return environment.integrationApiUrl;
  }

  get productApiUrl() {
    return environment.productApiUrl;
  }

  get customersApiUrl() {
    return environment.customersApiUrl;
  }

  get transactionsApiUrl() {
    return environment.transactionsApiUrl;
  }

  get giftCardsApiUrl() {
    return environment.giftCardsApiUrl;
  }

  get hookApiUrl() {
    return environment.hookApiUrl;
  }

  get reportingApiUrl() {
    return environment.reportingApiUrl;
  }
}
