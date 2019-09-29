import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Hero }    from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salaryApp';

constructor(){}
userModel = new Hero('Dr IQ', "sdgsd@dgds.dg", 34);
getSalary = [];

  onSubmit(data: NgForm): void {
  	console.log(data.value.salary);
  	this.getSalary[0] = data.value.salary;
  	console.log(this.getSalary);

for (var i = 0; i <= localStorage.length-1; i++)    
    {      
      var key = sessionStorage.key(i);    
       var val = sessionStorage.getItem(key);   
         console.log('safag' + localStorage.length); 
    } 

  	localStorage.setItem('dataSource', JSON.stringify(this.getSalary));
  	this.getSalary[0] = JSON.parse(localStorage.getItem('dataSource'));
  	
  	console.log(JSON.parse(localStorage.getItem('dataSource')));
  }

}
