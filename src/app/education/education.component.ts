import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ElementarySchoolComponent } from './elementary-school/elementary-school.component';
import { JuniorHighSchoolComponent } from './junior-high-school/junior-high-school.component';
import { SeniorHighSchoolComponent } from './senior-high-school/senior-high-school.component';
import { UniversityComponent } from './university/university.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openES(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    this.matDialog.open(ElementarySchoolComponent, dialogConfig)
  }

  openJHS(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    this.matDialog.open(JuniorHighSchoolComponent, dialogConfig);
  }

  openSHS(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    this.matDialog.open(SeniorHighSchoolComponent, dialogConfig)
  }

  openUniv(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    this.matDialog.open(UniversityComponent, dialogConfig)
  }
}
