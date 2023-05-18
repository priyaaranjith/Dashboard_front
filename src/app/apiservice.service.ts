import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

   fetchdashboard =()=>
  {
    return this.http.get("http://localhost:8081/views")
  }

  fetchhospital =()=>
  {
    return this.http.get("http://localhost:8081/viewall")
  }
}
