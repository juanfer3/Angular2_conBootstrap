import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
    
    valorActual: string="";
    guardarValor: string="";
    
    isMouseOver: boolean =false;
    nome: string='adc';
    
    constructor() { 
    
    
    }
    
    btnClick(){
        
        alert("hola");
        
    }
    
    OnKeyUp(evento: KeyboardEvent){
        
        console.log(evento);
        console.log(evento.key);
        this.valorActual=(<HTMLInputElement>evento.target).value;
        
    }
    
    salvarValor(valor){
        this.guardarValor=valor;
        
    }

    isMyOver(){
        
        this.isMouseOver = !this.isMouseOver;
        
    }
    
    isMyOut(){
        
        
    }
    
  ngOnInit() {
  }

}
