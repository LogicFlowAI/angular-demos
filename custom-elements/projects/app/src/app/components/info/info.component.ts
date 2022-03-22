import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input() data: any;

  constructor(
    private _snackBar: MatSnackBar
  ) {
  }

  showInfo(): void {
    this._snackBar.open(this.data ? JSON.stringify(this.data) : 'No data', 'OK');
  }

}
