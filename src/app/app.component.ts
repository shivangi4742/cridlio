import { Component } from '@angular/core';
import { timeStamp } from 'console';
import { ApiService } from './services/api.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'credilio';
  constructor(private apiService: ApiService){}
  ngOnInit() {

    this.apiService.getmoviesData().subscribe((res: any) => {
      if(res) {
        console.log(res);
      }
      
    })
  }
}
