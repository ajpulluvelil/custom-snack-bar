import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { CustomSnackBarComponent } from "./custom-snack-bar/custom-snack-bar.component";
import { CustomeSnackBarService } from "./snack-bar-service/custome-snack-bar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "customeSnackBar";

  constructor(
    private _snackBar: MatSnackBar,
    private snackService: CustomeSnackBarService) {}

  enableSnackBar(message = "Hi", action = "OK") {
    this._snackBar.open(message, action, {
      verticalPosition: "bottom",
    });
  }

  openSnackBarSuccess() {
    this.snackService.openSnackBar('Testing snack', 'OK', 'SUCCESS');
  }

  openSnackBarWarn() {
    this.snackService.openSnackBar('Testing snack', 'OK', 'WARN');
  }

  openSnackBarInfo() {
    this.snackService.openSnackBar('Testing snack', 'OK', 'INFO');
  }

  openSnackBarError() {
    this.snackService.openSnackBar('Testing snack', 'OK', 'ERROR');
  }
}
