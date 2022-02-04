import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation
  appName = "This is an interpolation example!"

  //Property Binding
  clientName:string = "Paolo";

  //Style Binding
  appliedCSSClass = "green";
  notappliedCSSClass = false;
  myColor = 'red';

  
  getData(data:any)
  {
    console.warn(data);
  }

  //Event Binding
  showData($event:any){
    console.log("Button is clicked!"); if($event){
      console.log($event.target.value);
    }
    
  }

}
