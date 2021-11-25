import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { CustomSnackBarComponent } from "../custom-snack-bar/custom-snack-bar.component";

@Injectable({
  providedIn: "root",
})
export class CustomeSnackBarService {

  public readonly snackType = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    WARN: "WARN",
    INFO: "INFO",
  };

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, snackType) {
    const _snackType = snackType !== undefined ? snackType : "SUCCESS";
    this.snackBar.openFromComponent(CustomSnackBarComponent, {
      // duration: 2000,
      panelClass: [
        _snackType === this.snackType.SUCCESS
          ? "snack-bar-container-success"
          : _snackType === this.snackType.ERROR
          ? "snack-bar-container-error"
          : _snackType === this.snackType.INFO
          ? "snack-bar-container-info"
          : _snackType === this.snackType.WARN
          ? "snack-bar-container-warn"
          : "",
      ],
      horizontalPosition: "center",
      verticalPosition: "top",
      data: { message: message, snackType: _snackType },
    });
  }
}
