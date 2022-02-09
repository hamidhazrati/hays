import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JsonService } from '../acme-service';

export enum Department {
  Financial = "Financial",
  Technical = "Technical",
  Marketing = "Marketing",
  HumanResources = "Human Resources"
}
export interface Card {
  id: number,
  name: string,
  department: Department,
  show?: boolean,
}
const RESPONSIVE_BREAKPOINT = 720;

@Component({
  selector: 'app-acme-dashboard',
  templateUrl: './acme-dashboard.component.html',
  styleUrls: ['./acme-dashboard.component.scss']
})
export class AcmeDashboardComponent {

  data: any = null;

  public DepartmentEnum = Department;

  constructor(
    private jsonService: JsonService
  ) {
  }

  start(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.data = data;
      this.closeAllRows();
    }, (err) => {
      console.log(err)
    });
  }

  closeAllRows() {
    this.data.forEach((element: any) => {
      element.open = false;
    });
  }

  onRowOpened(row: any) {
    this.closeAllRows();
    row.open = true;
  }

  onRowClosed(row: any) {
    row.open = false;
  }

}
