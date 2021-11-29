import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));
  it('should create the app component', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render the navigation links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const home = fixture.nativeElement.querySelector('.homeId');
    const tickets = fixture.nativeElement.querySelector('.ticketId');
    expect(home).toBeDefined();
    expect(tickets).toBeDefined();
  });
});
