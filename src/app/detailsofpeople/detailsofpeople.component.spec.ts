import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsofpeopleComponent } from './detailsofpeople.component';

describe('DetailsofpeopleComponent', () => {
  let component: DetailsofpeopleComponent;
  let fixture: ComponentFixture<DetailsofpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsofpeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsofpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
