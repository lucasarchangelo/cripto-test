import { Component, OnInit } from '@angular/core';
import { TestesService } from 'src/app/shared/utils/testes.service';

import { Response } from '../../shared/models/response';
import { CriptoProperties } from 'src/app/shared/models/cripto-properties';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tipo1 } from 'src/app/shared/models/tipo1';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly testeService: TestesService,
    private readonly httpClient: HttpClient,
  ) { }

  ngOnInit() {
    const criptoProperties = new CriptoProperties();
    criptoProperties.decriptValues = [];
    criptoProperties.hasDecritpValues = true;
    criptoProperties.hasEncriptionValues = true;
    criptoProperties.encriptionValues = [];
    
    this.testeService.get<Response>('http://www.mocky.io/v2/5dfed7dc3200006a005aef32', criptoProperties)
      .subscribe((value: Response) => {
        console.log(value.teste1);
      });

    this.testeService.post<Response>('http://www.mocky.io/v2/5dfed7dc3200006a005aef32', { teste: 'oi' }, criptoProperties)
      .subscribe((value: Response) => {
        console.log(Reflect.getMetadata('decription', value, 'teste1'));
      });

    this.httpClient.get<Tipo1>('http://www.mocky.io/v2/5dffe2e63200006a005af059', {observe: 'response' })
      .subscribe((value: HttpResponse<Tipo1>) => {
        Object.setPrototypeOf(value.body, Tipo1.prototype);
        console.log(value.body);
        console.log('TESTELUCAS ', Reflect.getMetadata('decription', value.body, 'teste1'));
      });
  }
}
