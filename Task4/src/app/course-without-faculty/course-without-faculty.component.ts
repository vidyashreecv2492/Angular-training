import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-course-without-faculty',
  templateUrl: './course-without-faculty.component.html',
  styleUrls: ['./course-without-faculty.component.css']
})
export class CourseWithoutFacultyComponent implements OnInit {
  filteredData:any=[]
  combineddata=
  [{"courseId":"E01","courseName":"Embedded C Programming","durationHours":56,"passScore":55,"instructorId":101,"facultyId": 101, "facultyName": "Vivek", "facultyMobile": "9998887771", "facultyEmail": "vivek@abc.com", "highestQualification": "Dr", "workLocation": "Mysore" },
  
  {"courseId":"S01","courseName":"Software Development LifeCycle","durationHours":48,"passScore":55,"instructorId":102,"facultyId": 102, "facultyName": "Pridhvi", "facultyMobile": "6668887772", "facultyEmail": "pridhvi@abc.com", "highestQualification": "Dr", "workLocation": "Bangalore" }, 
  
  {"courseId":"D01","courseName":"Programming using C#","durationHours":48,"passScore":55,"instructorId":103, "facultyId": 103, "facultyName": "Patrick", "facultyMobile": "8889997773", "facultyEmail": "patrick@abc.com", "highestQualification": "ME", "workLocation": "Mysore" }, 
  
  {"courseId":"P01","courseName":"Python Programming","durationHours":56,"passScore":55,"instructorId":104,"facultyId": 104, "facultyName": "Rajesh", "facultyMobile": "9988987674", "facultyEmail": "rajesh@abc.com", "highestQualification": "ME", "workLocation": "Bangalore" }, 
  
  {"courseId":"B01","courseName":"Programming using C","durationHours":48,"passScore":55,"instructorId":107,"facultyId": 107, "facultyName": "Bharath", "facultyMobile": "7876527713", "facultyEmail": "bharath@abc.com", "highestQualification": "ME", "workLocation": "Bangalore" }, 
  {"courseId":"B02","courseName":"Programming using C++","durationHours":48,"passScore":55,"instructorId":105, "facultyId": 105, "facultyName": "Bhargav", "facultyMobile": "9898785671", "facultyEmail": "bhargav@abc.com", "highestQualification": "ME", "workLocation": "Bangalore"},
  {"courseId":"J01","courseName":"Java Programming","durationHours":48,"passScore":60,"instructorId":106,"facultyId": 106, "facultyName": "Ajay", "facultyMobile": "8978187541", "facultyEmail": "ajay@abc.com", "highestQualification": "ME", "workLocation": "Hyderabad" }, 
  
  {"courseId":"J02","courseName":"Advance Java Programming","durationHours":48,"passScore":55,"instructorId":108,"facultyId": 108, "facultyName": "Thiruppathi", "facultyMobile": "9894147084", "facultyEmail": "thiruppathi@abc.com", "highestQualification": "ME", "workLocation": "Mysore" },
  
  {"courseId":"D02","courseName":"ASP.Net Programming","durationHours":56,"passScore":55,"instructorId":103, "facultyId": 103, "facultyName": "Patrick", "facultyMobile": "8889997773", "facultyEmail": "patrick@abc.com", "highestQualification": "ME", "workLocation": "Mysore" }, 
  
  {"courseId":"J03","courseName":"Front end Technologies","durationHours":56,"passScore":55,"instructorId":106,"facultyId": 106, "facultyName": "Ajay", "facultyMobile": "8978187541", "facultyEmail": "ajay@abc.com", "highestQualification": "ME", "workLocation": "Hyderabad" }
  ,
  {"courseId":"A01","courseName":"AWS Services","durationHours":56,"passScore":55,"instructorId":100,"facultyId": null, "facultyName": null, "facultyMobile": null, "facultyEmail": null, "highestQualification": null, "workLocation":null},
  {"courseId":"A02","courseName":"Azure Services","durationHours":56,"passScore":55,"instructorId":100,"facultyId": null, "facultyName": null, "facultyMobile": null, "facultyEmail": null, "highestQualification": null, "workLocation":null}];
  
  constructor() { }
  
  displayedColumns: string[] | undefined
  dataSource:any
  
  ngOnInit(): void {
    this.combineddata.forEach(element => {
      if(element.facultyId==null)
      {
        this.filteredData.push(element);
      }
    });
    this.displayedColumns = ['courseId', 'courseName', 'durationHours', 'passScore','instructorId'];
  this.dataSource =this.filteredData
  }

}
