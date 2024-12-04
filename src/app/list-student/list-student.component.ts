import { Component } from '@angular/core';
import { Student } from './student.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'list-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  showAddForm: boolean = false;
  newStudent: Student = {id:0, name: "", age: 0, marks: 0, dateOfBirth: new Date()};
  allStudents: Student[] = [
    {id:101, name: "John", age: 20, marks: 80, dateOfBirth: new Date(2001, 10, 10), editable: false},
    {id:102, name: "Peter", age: 22, marks: 90, dateOfBirth: new Date(2005, 11, 11), editable: false},
    {id:103, name: "Rahul", age: 24, marks: 85, dateOfBirth: new Date(2003, 9, 9), editable: false}
  ];

  deleteStudent(id: number): void{
    this.allStudents = this.allStudents.filter(student => student.id !== id);
  }

  toggleAddForm(): void{
    this.showAddForm = !this.showAddForm;
  }

  addStudent(): void{
    let newId = this.allStudents[this.allStudents.length - 1].id + 1;
    this.newStudent.id = newId;
    this.newStudent.editable = false;
    console.log(this.newStudent);
    this.allStudents.push(this.newStudent);
    this.showAddForm = false;
  }

  editStudent(bookId: number): void{
    this.allStudents.forEach(student => {
      if(student.id === bookId){
        student.editable = !student.editable;
      }
    });
  }
}
