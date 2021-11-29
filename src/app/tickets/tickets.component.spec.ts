import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketsService } from '../services/tickets.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TicketsComponent } from './tickets.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
describe('TicketsComponent', () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketsComponent],
      imports: [HttpClientModule],
      providers: [HttpClient, TicketsService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ticket component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.totalCountHeading');
    expect(title).toBeDefined();
  });

  it('should handle errors in ticket component', () => {
    const response1 = component.handleErrors({ ok: false, status: 401 });
    const response2 = component.handleErrors({ ok: false, status: 400 });
    const response3 = component.handleErrors({ ok: false, status: 404 });

    expect(response1).toContain("Authentication error");
    expect(response2).toContain("Invalid Ticket");
    expect(response3).toContain("Cannot find the ticket");

    fixture.detectChanges();
    const err = fixture.nativeElement.querySelector('.errors');
    expect(err).toBeDefined();
  });

  it('should give no errors when success response is returned', () => {
    const response = component.handleErrors({ ok: true, status: 401 });

    expect(response).toBe("");
  });
});
