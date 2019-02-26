import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; 
  @Input() leyenda: string;
  @Input() progreso: number;
  @Output() newProgreso: EventEmitter<number> = new EventEmitter();

  constructor() {  }

  ngOnInit() {
  }

  onChanges( newValue: number ){

    //let elemHTML: any = document.getElementsByName('progreso')[0];
    if(this.progreso >= 100){
      this.progreso = 100;
    }else if(this.progreso <= 0 ){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }
    
    //elemHTML.value = Number( this.progreso );
    this.txtProgress.nativeElement.value = this.progreso;

    this.newProgreso.emit(this.progreso);

  }

  cambiarValor(valor: number){
    if(this.progreso >=0 && this.progreso <=100){
      this.progreso = this.progreso + valor;
      this.newProgreso.emit(this.progreso);
    }else if(this.progreso > 100){
      this.progreso = 100;
    }else if(this.progreso < 0 ){
      this.progreso = 0;
    }
    this.txtProgress.nativeElement.focus();
  }

}
