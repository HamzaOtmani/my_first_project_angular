import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  data=[
  {nom:"najmeddine",prenom:"ayoub",age:23},
  {nom:"otmani",prenom:"hamza",age:23}
  ,{nom:"sudaria avila",prenom:"stephen zion",age:23}
]
Message : string='' ; 
  
getMessage(){
  console.log("data saved")
}


constructor (private route: Router){}


gotoUser(){
  this.route.navigate(["/user/compp"])
}


name ="Hamza";



}
