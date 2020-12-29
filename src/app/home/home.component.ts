import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services/services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data :Array<object>=[];
  constructor(private bookservice : ServicesService) { }

  ngOnInit(): void {
    this.bookservice.getBooksList().subscribe({
      next(data){
        
        console.log('success : ',data);
        //this.data=data;
      },
      error(msg){
        console.log('error :',msg);
      }
    });
  }


}
