import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any ;
  constructor() { }

  ngOnInit(): void {
  }
    public getEventos(): void{
    this.eventos= [


      ]

    }
    
}
