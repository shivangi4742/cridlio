import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private Uri: any = "http://localhost:8080/";
  constructor(private http: HttpClient, private router: Router) {
  }

  getmoviesData(): Observable<any> {
    const url = this.Uri + '/getData';
    const options = {  };
    return this.http.get(url, options)
      .pipe((data: any) => data);
  }

  handleError(err: any, message: any){
    alert(err);
  }

 
}
