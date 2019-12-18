import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class StudentsListService {

  constructor(private http:HttpClient) {}
  getStudentsList() {
    return this.http.get('/api/students');
}
}
