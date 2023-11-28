import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [AppComponent, OpenCloseComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
