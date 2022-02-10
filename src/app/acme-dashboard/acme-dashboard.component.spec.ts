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
    component.data = [
      {
        id: 1,
        quetion: 'a',
        answer: 'b',
        open: false,
      },
      {
        id: 2,
        quetion: 'c',
        answer: 'd',
        open: false,
      },
      {
        id: 3,
        quetion: 'e',
        answer: 'f',
        open: false,
      },
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially accordion be all collapse', () => {
    expect(component.data[0].open || component.data[1].open || component.data[2].open).toBeFalsy();
  });
  it('should open second row', () => {
    component.data[0].open = true;
    component.data[1].open = true;
    component.data[2].open = true;
    component.closeAllRows()
    expect(component.data[0].open || component.data[1].open || component.data[2].open).toBeFalsy();
  });

  it('should on row click open row and close others', () => {
    component.onRowOpened(component.data[1]);
    expect(component.data[0].open || component.data[2].open).toBeFalsy();
    expect(component.data[1].open).toBeTruthy();
  });

  it('should on an open row click close row then all others should be closed', () => {
    component.data[1].open = true;
    component.onRowClosed(component.data[1]);
    expect(component.data[0].open || component.data[1].open || component.data[2].open).toBeFalsy();
  });

  it('should on an open row , open another row then all others should be closed apart from new open ', () => {
    component.data[1].open = true;
    component.onRowOpened(component.data[0]);
    expect(component.data[1].open || component.data[2].open).toBeFalsy();
    expect(component.data[0].open).toBeTruthy();
  });

});
