import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedTeamComponent } from './need-team.component';

describe('NeedTeamComponent', () => {
  let component: NeedTeamComponent;
  let fixture: ComponentFixture<NeedTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
