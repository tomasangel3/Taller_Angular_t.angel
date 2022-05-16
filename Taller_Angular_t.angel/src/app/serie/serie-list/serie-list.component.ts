import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];
  seasonsAverage: number = -1;

  getSeries(): void {
    this.serieService.getSeries().subscribe((series: Array<Serie>) => {
      this.series = series;
      console.log(series);
      this.seasonsAverage = this.getSeasonsAverage(series);
    })

  }

  getSeasonsAverage(series: Serie[]): number{
    let prom = 0;
    let totalSeasons = 0;
    let totalSeries = series.length;
    series.forEach( (serie)=>{
      totalSeasons = totalSeasons + serie.seasons ;
      console.log(totalSeasons);
    })
    if (totalSeasons > 0){
      prom = totalSeasons/ totalSeries;
    }
    return prom;
  }

  ngOnInit() {
    this.getSeries();
  }

}
