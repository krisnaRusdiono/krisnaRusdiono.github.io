import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodataComponent } from './biodata/biodata.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExpertiseComponent } from './expertise/expertise.component';

const routes: Routes = [
  {
    path: 'biodata', component: BiodataComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'education', component: EducationComponent
  },
  {
    path: 'experiences', component: ExperiencesComponent
  },
  {
    path: 'expertise', component: ExpertiseComponent
  },
  {
    path: 'portofolio', component: PortofolioComponent
  },
  {
    path: '', redirectTo: '/biodata', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
