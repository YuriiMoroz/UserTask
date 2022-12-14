import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson02',
  templateUrl: './lesson02.component.html',
  styleUrls: ['./lesson02.component.scss']
})
export class Lesson02Component implements OnInit {

  public login!:string
  public password!:string
  public email!:string
  public arr:{login:string,password:string,email:string}[]=[]
  public person!:{login:string,password:string,email:string}
  public ADD = true;
  public pos!:number
  public LoginExp =/^[a-zA-Z][a-z]{3,15}$/;
  public MailExp = /^[a-z0-9\.-]+@[a-z]+\.[a-z]+$/
  public PassExp = /^[a-z0-9\.-_]{4,16}$/
  
  constructor() { 
  }
  ngOnInit(): void {
  }
  
  AddFunction(l:string,p:string,e:string) :void{
    this.person = {
      login:l,
      password:p,
      email:e
    }
    if (this.LoginExp.test(l)&&this.PassExp.test(p)&&this.MailExp.test(e)) {
      this.arr.push(this.person)
      this.clearFunction()
    } else {
      alert("Incorect data")
    }
    
  }

  EditFunction(index:number):void{
    let user = this.arr[index]
    this.login=user.login
    this.password=user.password
    this.email=user.email
    this.ADD = false
    this.pos=index
  }
  DeleteFunction(index:number):void{
    this.arr.splice(index,1)
    console.log(this.arr)
  }
  FinishEdit(l:string,p:string,e:string):void{
    this.person = {
      login:l,
      password:p,
      email:e
    }
    if (this.LoginExp.test(l)&&this.PassExp.test(p)&&this.MailExp.test(e)) {
      this.arr[this.pos]=this.person
      this.clearFunction()
      this.ADD=false
    } else {
      alert("Incorect data")
    }
  }

  clearFunction(){
    this.login=''
    this.password=''
    this.email=''
  }
}
