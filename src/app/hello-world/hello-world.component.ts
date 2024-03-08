import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
    title='yameen';
    firstname = 'mohammed'
    lastname = 'yameen'
    name='kaviarasu'
    colour = 'blue'
    isdisabled:boolean = false;
    clickcount=0;
    clickcount1=0;
    increasecount(){
      this.clickcount++;
       
    }
    getMax(num1:number,num2:number):number{
         return Math.max(num1,num2);
    }
    value='';
    value1='';
    handleinput(event:any){
      this.value =event.target.value;
    }
    movies = [
      'x-man',
      'superman',
      'batman'
    ]
    directions = [
      {director:'muruga', hero:'surya',comedian:'vivek'},
      {director:'muruga', hero:'surya',comedian:'vivek'}
    ]
    num:number =0;
    showMe=true;
    enableprimary=false;
    enablebig= false;
    color= 'error';
    colours: string= 'black';
    colourss:string[]= ['red','blue','green','aqua']
 async changecolour(){
      for(let i=0;i<this.colourss.length;i++){
     this.colours= this.colourss[i];
       if(i==this.colourss.length -1){
        i=0;
       }
      await new Promise(resolve => setTimeout(resolve, 1000));
      }
       
    }

    onmouseenter(){
      this.colours='yellow';
    }

    onmouseleave(){
      this.colours='black';
    }

    todate:any = new Date();
     message ='hiWer'
     price=12160
     messages = 'welcome to angular'
}


