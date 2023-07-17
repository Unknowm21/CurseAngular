import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any  = [] ;
  public filteredEvents : any = [];
  hideImage:boolean = true;
  private _filterlist :string ='';

  public get filterlist(){
    return this._filterlist;

  }

    public set filterlist(value: string){
      this._filterlist= value;
      this.filteredEvents = this.filterlist ? this.filterEvents(this.filterlist) :this.eventos;
    }

    filterEvents(filterfor:string):any {
      filterfor: filterfor.toLocaleLowerCase();
      return this.eventos.filter((evento: { tema: string; }) => evento.tema.toLocaleLowerCase().indexOf(filterfor) !== -1)

    }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }
  showImage(){
    this.hideImage = !this.hideImage
  }
    public getEventos(): void{
   this.http.get("http://localhost:5211/api/Eventos").subscribe(
    response =>{ this.eventos = response;
      this.filteredEvents = this.eventos;
    },
    error => console.log(error),
   )

    }

}
