import {Component, OnInit} from '@angular/core';

interface ExperienceItem {
  endDate: Date;
  description: string;
  company: string;
  startDate: Date;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Array<ExperienceItem> = [
    {
      company: 'company.yellow.name',
      startDate: new Date(2014, 3, 1),
      endDate: new Date(2014, 9, 31),
      description:
        'company.yellow.description',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  duration(item: ExperienceItem) {
    return item.endDate.getMonth() - item.startDate.getMonth() + 12 * (item.endDate.getFullYear() - item.startDate.getFullYear())
  }
}
