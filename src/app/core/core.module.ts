import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only`);
    }
  }
}
