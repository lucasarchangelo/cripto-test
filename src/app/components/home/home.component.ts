import { Component, OnInit } from '@angular/core';
import { TestesService } from 'src/app/shared/utils/testes.service';

import { Response } from '../../shared/models/response';
import { CriptoProperties } from 'src/app/shared/models/cripto-properties';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly testeService: TestesService) { }

  ngOnInit() {
    const criptoProperties = new CriptoProperties();
    criptoProperties.decriptValues = ['teste1', 'teste3'];
    criptoProperties.hasDecritpValues = true;
    criptoProperties.hasEncriptionValues = true;
    criptoProperties.encriptionValues = ['teste'];
    this.testeService.get<Response>('http://www.mocky.io/v2/5dfe515b3100000a1fc96f34', criptoProperties)
      .subscribe((value) => {
        console.log(value);
      });

    this.testeService.post<Response>('http://www.mocky.io/v2/5dfe515b3100000a1fc96f34', {teste: 'oi'}, criptoProperties)
      .subscribe((value) => {
        console.log(value);
      });
  }
}
