import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiserviceService } from '../apiservice.service';
import { of, throwError } from 'rxjs';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let apiService: ApiserviceService;
  let httpTestingController: HttpTestingController;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, NavbarComponent],
      providers: [ApiserviceService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiserviceService);
  });

  it('should initialize component properties and call fetchdashboard API', () => {
    spyOn(apiService, 'fetchdashboard').and.returnValue(of('mockResponse'));

    fixture.detectChanges();

    expect(component.isLoading).toBe(false);
    expect(component.selectedOption).toEqual('2023-05-15');
    expect(apiService.fetchdashboard).toHaveBeenCalled();
    expect(component.dashboard).toEqual('mockResponse');
  });

  it('should call dateFilterClick with default date on component initialization', () => {
    spyOn(component, 'dateFilterClick');

    fixture.detectChanges();

    expect(component.dateFilterClick).toHaveBeenCalledWith('2023-05-15');
  });

  it('should make API calls and assign responses in dateFilterClick', fakeAsync(() => {
    const mockDate = '2023-05-15';
    const mockResponse = 'mockResponse';

    spyOn(apiService, 'dateFiler').and.returnValue(of(mockResponse));
    spyOn(apiService, 'dateFilterProcedure').and.returnValue(of(mockResponse));
    spyOn(apiService, 'dateFilterReturn').and.returnValue(of(mockResponse));
    spyOn(apiService, 'dateFilterHospital').and.returnValue(of(mockResponse));
    spyOn(apiService, 'dateFilterConsumables').and.returnValue(of(mockResponse));

    component.dateFilterClick(mockDate);
    tick(200);

    expect(component.isLoading).toBe(false);
    expect(apiService.dateFiler).toHaveBeenCalledWith(mockDate);
    expect(apiService.dateFilterProcedure).toHaveBeenCalledWith(mockDate);
    expect(apiService.dateFilterReturn).toHaveBeenCalledWith(mockDate);
    expect(apiService.dateFilterHospital).toHaveBeenCalledWith(mockDate);
    expect(apiService.dateFilterConsumables).toHaveBeenCalledWith(mockDate);
    expect(component.filter).toEqual(mockResponse);
    expect(component.filterDateProcedures).toEqual(mockResponse);
    expect(component.filterDateReturn).toEqual(mockResponse);
    expect(component.filterDateHospital).toEqual(mockResponse);
    expect(component.filterDateConsumable).toEqual(mockResponse);
  }));

  it('should handle API errors and set isLoading to false', fakeAsync(() => {
    const mockDate = '2023-05-15';

    spyOn(apiService, 'dateFiler').and.returnValue(throwError('error'));

    component.dateFilterClick(mockDate);
    tick(200);

    expect(component.isLoading).toBe(false);
    expect(apiService.dateFiler).toHaveBeenCalledWith(mockDate);
    // Add similar expectations for other API calls
  }));

});
