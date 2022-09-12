import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostEventComponent } from './host-event.component';

describe('Host Event Component', () => {
  // before each test suite
  // initiatize an instance of the component to be tested
  let componentInstance: HostEventComponent;
  let fixture: ComponentFixture<HostEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostEventComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostEventComponent);
    fixture.detectChanges();
    componentInstance = fixture.componentInstance;
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('should have correct property name and values', () => {
    let eventName = componentInstance.eventName;
    expect(eventName).toBe('DEM@Fillmore');
    let eventList = componentInstance.eventList;
    expect(eventList).toEqual([]);
  });

  it('should call addEvent and getEvent and return a list of event', () => {
    componentInstance.addEvent();
    let eventList = componentInstance.getEvent();
    expect(eventList).toEqual(['DEM@Fillmore'])
  })

})
