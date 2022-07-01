import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpeopleComponent } from './listofpeople.component';

describe('ListofpeopleComponent', () => {
  let component: ListofpeopleComponent;
  let fixture: ComponentFixture<ListofpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofpeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
