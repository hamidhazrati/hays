import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonService } from '../acme-service';

import { AcmeDashboardComponent } from './acme-dashboard.component';

describe('AcmeDashboardComponent', () => {
  let component: AcmeDashboardComponent;
  let fixture: ComponentFixture<AcmeDashboardComponent>;
  const jsonService = jasmine.createSpyObj('JsonService', ['getJsonData']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcmeDashboardComponent],
      providers: [
        { provide: JsonService, useValue: jsonService },
      ],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // component.start();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
