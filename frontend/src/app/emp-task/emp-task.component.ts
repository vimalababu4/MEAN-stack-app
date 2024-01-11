import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-emp-task',
 
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emp-task.component.html',
  styleUrl: './emp-task.component.css'
})
export class EmpTaskComponent {

   apiRoot: string = "http://localhost:8000"; 

  EmployeeArray : any[]=[];

  "name":string="";
  "address":string ="";
  "phone": string="";

  result: string="";
  currentEmployeeID="";

  constructor(private http: HttpClient){
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.http.get("http://localhost:8000/user/getAll").subscribe((resultData:any) =>{
      this.EmployeeArray =  resultData.data;
    });
  }

  setUpdate(emp: any){
      this.name = emp.name;
      this.address = emp.address;
      this.phone = emp.phone;

      this.currentEmployeeID= emp._id;
  }
  updataRecords(){
    let bodyData={
      "name":this.name,
      "address": this.address,
      "phone": this.phone
    }
    this.http.put("http://localhost:8000/user/update"+"/"+this.currentEmployeeID, bodyData).subscribe((resultData:any) =>{
      console.log(resultData);
      this.getAllEmployee();
    });
  }

  save(){
    if(this.currentEmployeeID == ''){
      this.register();
    }else{
      this.updataRecords();
    }
  }
  setDelete(emp :any){
    this.currentEmployeeID= emp._id;
    this.http.delete("http://localhost:8000/user/delete"+"/"+this.currentEmployeeID).subscribe((resultData:any) =>{
      console.log(resultData);
      this.getAllEmployee();
    });
  }

  register(){
   
    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone
    };
    this.http.post("http://localhost:8000/user/create", bodyData).subscribe((resultData:any) =>{
      console.log(resultData);
      //alert('Employee registered succcessfully')
      this.getAllEmployee();
      this.name='';
      this.address='';
      this.phone='';
     });
/*     let url = `${this.apiRoot}/user/create`;
      this.http.post(url, bodyData).subscribe(res => console.log(res.toString())); */
  }

}
