import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie>= [];
  promedio: number = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.darPromedioTemporadas(this.series);
    });
  }
  darPromedioTemporadas(aSeries: Serie[]){
    let totalTemporadas:number=0;
    for(let index = 0; index <aSeries.length;index++)
    {
        let serie: Serie = aSeries[index];
        totalTemporadas+=serie.seasons;
    }
    this.promedio = totalTemporadas/aSeries.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
