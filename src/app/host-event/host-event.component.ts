import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-event',
  templateUrl: './host-event.component.html',
  styleUrls: ['./host-event.component.css']
})
export class HostEventComponent implements OnInit {
  eventName: string = 'DEM@Fillmore';
  eventList: any[] = [];

  constructor() { }
  ngOnInit(): void {}

  addEvent() {
    this.eventList.push(this.eventName)
  }

  getEvent() {
    return this.eventList
  }

}
