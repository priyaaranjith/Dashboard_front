import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false; // Declare the isLoading variable and initialize it as false

  selectedOption: any;
  constructor(private api: ApiserviceService) {
    api.fetchdashboard().subscribe(
      (response) => {
        this.dashboard = response;
      }
    );
  }
  

  ngOnInit() {
    this.selectedOption = '2023-05-15'; // Set the default date when the page loads
    this.dateFilterClick(this.selectedOption); // Call the dateFilterClick function with the default date
  }

  dashboard: any = [];
  hospitals: any = [];
  consumables: any = [];
  filter: any = [];
  filterDateProcedures: any = [];
  filterDateReturn: any = [];
  filterDateHospital: any = [];
  filterDateConsumable: any = [];
  date: any = '';

  dateFilterClick = (date: any) => {
    this.isLoading = true; // Set isLoading to true before starting the loading operation
    this.selectedOption = date;
    console.log(date);

    // Simulate a delay using setTimeout
    setTimeout(() => {
      this.api.dateFiler(date).subscribe(
        (response: any) => {
          this.date = 'date';
          this.filter = response;
          console.log(response);
          this.isLoading = false; // Set isLoading to false after the loading operation is complete
        }
      );

      this.api.dateFilterProcedure(date).subscribe(
        (response: any) => {
          this.date = 'date';
          this.filterDateProcedures = response;
          console.log(response);
          this.isLoading = false; // Set isLoading to false after the loading operation is complete
        }
      );

      this.api.dateFilterReturn(date).subscribe(
        (response: any) => {
          this.date = 'date';
          this.filterDateReturn = response;
          console.log(response);
          this.isLoading = false; // Set isLoading to false after the loading operation is complete
        }
      );

      this.api.dateFilterHospital(date).subscribe(
        (response: any) => {
          this.date = 'date';
          this.filterDateHospital = response;
          console.log(response);
          this.isLoading = false; // Set isLoading to false after the loading operation is complete
        }
      );

      this.api.dateFilterConsumables(date).subscribe(
        (response: any) => {
          this.date = 'date';
          this.filterDateConsumable = response;
          console.log(response);
          this.isLoading = false; // Set isLoading to false after the loading operation is complete
        }
      );
    }, 200); // Set the delay time in milliseconds (2 seconds in this example)
  }
}
