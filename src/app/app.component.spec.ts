import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JsonService } from './acme-service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let mockSomeService = {
    getJsonData: () => { }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: JsonService, useValue: mockSomeService }
      ]

    }).compileComponents();
  });

  it('should create the app', () => {
    // spyOn(mockSomeService, 'getJsonData').and.returnValue( of() )
    // do stuff
    // expect(mockSomeService.getJsonData).toHaveBeenCalled();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'acme'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('acme');
  });
});
