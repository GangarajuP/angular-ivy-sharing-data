import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, tap, zip, delay } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {
  response;
  data;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    const api1 = this.http.get("https://reqres.in/api/users?page=2").pipe(delay(3000), tap(val => console.log("forkjion api 1", val)));
    const api2 = this.http.get('https://reqres.in/api/users/2').pipe(tap(val => console.log("forkjion api 2", val)));
    const api3 = this.http.get('https://reqres.in/api/unknown').pipe(tap(val => console.log("forkjion api 3", val)));;
    const api4 = this.http.get('https://reqres.in/api/unknown/2').pipe(tap(val => console.log("forkjion api 4", val)));;

    forkJoin([api1, api2, api3, api4]).subscribe(res =>{
      console.log(res);
      this.response = res;
    })
  }
  zipData(){
    let observable1$: Observable<any> = this.http.get('https://api.github.com').pipe(delay(5000), tap(res => console.log("api 1", res)));
    let observable2$: Observable<any> = this.http.get('https://api.github.com/emojis').pipe(tap(res => console.log(res)))

    zip([observable1$, observable2$]).subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

}