import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BiodataComponent } from './biodata/biodata.component';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ElementarySchoolComponent } from './education/elementary-school/elementary-school.component';
import { JuniorHighSchoolComponent } from './education/junior-high-school/junior-high-school.component';
import { SeniorHighSchoolComponent } from './education/senior-high-school/senior-high-school.component';
import { UniversityComponent } from './education/university/university.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    BiodataComponent,
    EducationComponent,
    ExperiencesComponent,
    ContactComponent,
    ExpertiseComponent,
    PortofolioComponent,
    PageNotFoundComponent,
    ElementarySchoolComponent,
    JuniorHighSchoolComponent,
    SeniorHighSchoolComponent,
    UniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule.forRoot(),
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
