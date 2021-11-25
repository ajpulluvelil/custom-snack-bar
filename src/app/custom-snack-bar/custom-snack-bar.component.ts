import { Component, Inject, OnInit } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material";

@Component({
  selector: "app-custom-snack-bar",
  templateUrl: "./custom-snack-bar.component.html",
  styleUrls: ["./custom-snack-bar.component.scss"],
})
export class CustomSnackBarComponent implements OnInit {
  public readonly snackType = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    WARN: "WARN",
    INFO: "INFO",
  };

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit() {}

  get getIcon() {
    switch (this.data.snackType) {
      case this.snackType.SUCCESS:
        return "check_circle_outline";
      case this.snackType.ERROR:
        return "highlight_off";
      case this.snackType.WARN:
        return "error_outline";
      case this.snackType.INFO:
        return "info";
    }
  }
}
