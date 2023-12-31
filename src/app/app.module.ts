import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { InputComponent } from './components/input/input.component';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessorDirective } from './directives/control-value-accessor.directive';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { SelectComponent } from './components/select/select.component';
import { BoardComponent } from './views/board/board.component';
import { ProfileComponent } from './views/profile/profile.component';
import { OffersComponent } from './views/offers/offers.component';
import { OfferFormComponent } from './components/offer-form/offer-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { OfferListItemComponent } from './components/offer-list-item/offer-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavComponent,
    InputComponent,
    ControlValueAccessorDirective,
    ValidationErrorsComponent,
    SelectComponent,
    BoardComponent,
    ProfileComponent,
    OffersComponent,
    OfferFormComponent,
    ModalComponent,
    OfferListComponent,
    OfferListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
