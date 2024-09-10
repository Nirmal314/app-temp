import { Component, NgModule } from '@angular/core';
@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.css']
})
export class CardComponent{
    name:string="Nil";
    age:number=20;
    address:string="Pune";
    salary:number=50000;
    //Image:string="../../assets/Rahul.jpg"
    Image:string="../../"
    products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 200 }
      ];
    // constructor(){
    //     console.log("Constructor called");
    // }
    // ngOnInit(){
    //     console.log("ngOnInit called");
    // }
    // ngAfterViewInit(){

    onchangeevent(e:any){
        this.name=e.target.value
    }
    Increment(){
        this.age=this.age+1;
    
    }
}