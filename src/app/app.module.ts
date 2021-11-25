import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CustomSnackBarComponent } from "./custom-snack-bar/custom-snack-bar.component";
import { MatIconModule } from "@angular/material/icon";
import { CustomeSnackBarService } from "./snack-bar-service/custome-snack-bar.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomSnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    CustomeSnackBarService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomSnackBarComponent,
  ],
})
export class AppModule {}
