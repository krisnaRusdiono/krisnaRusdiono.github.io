import { Component, OnInit } from '@angular/core';

export interface Experiences{
  img: string;
  title: string;
  caption: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  datasrc: Experiences[] = [
    {img: 'assets/image/sdn-asmi.jpg', title: 'SDN ASMI BANDUNG', caption: 'Teachers & Administration Staff (4 years)'},
    {img: 'assets/image/sd-mutiara-bunda.jpeg', title: 'YAYASAN CAHAYA MUTIARA BUNDA', caption: 'Design staff (1 year)'},
    {img: 'assets/image/indigrow.jpg', title: 'INDIGROW CDC', caption: 'Behaviour Therapist (1 year)'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
