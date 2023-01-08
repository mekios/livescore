import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponentShellComponent } from './event-component-shell.component';

describe('EventComponentShellComponent', () => {
  let component: EventComponentShellComponent;
  let fixture: ComponentFixture<EventComponentShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventComponentShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventComponentShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
