import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(private api:ApiserviceService){
    api.fetchdashboard().subscribe(
      (response)=>{
        this.dashboard=response
      }
    )
    api.fetchhospital().subscribe(
      (response)=>{
        this.hospital=response
      }
    )
  }

  dashboard:any=[]
  hospital:any=[]
}