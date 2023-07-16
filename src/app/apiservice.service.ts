import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

   fetchdashboard =()=>
  {
    return this.http.get("http://localhost:8081/dateFilter")
  }

  dateFilterHospital =(date:any)=>
  {
    return this.http.get("http://localhost:8081/dateFilterHospital/"+date)
  }
  dateFilterConsumables =(date:any)=>
  {
    return this.http.get("http://localhost:8081/dateFilterConsumables/"+date)
  }
  dateFiler=(date:any)=>{
    return this.http.get("http://localhost:8081/dateFilter/"+date)
  }
  dateFilterProcedure=(date:any)=>{
    return this.http.get("http://localhost:8081/FilterProceduresByDate/"+date)
  }
  dateFilterReturn=(date:any)=>{
    return this.http.get("http://localhost:8081/FilterReturnsByDate/"+date)
  }
  
}
