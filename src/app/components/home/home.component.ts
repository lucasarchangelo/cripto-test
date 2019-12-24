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
    
    this.testeService.get<Response>('http://www.mocky.io/v2/5dfed7dc3200006a005aef32', new Response())
      .subscribe((value: Response) => {
        console.log(value);
        console.log(value.teste4);
        console.log('TESTELUCAS ', Reflect.getMetadata('decription', value, 'teste1'));
        console.log('TESTELUCAS ', Reflect.getMetadata('decription', value.teste4, 'compostName1'));
        console.log('TESTELUCAS ', Reflect.getMetadata('decription', value.teste4.compostName3, 'lucas2'));
      });

    this.testeService.post<Response>('http://www.mocky.io/v2/5dfed7dc3200006a005aef32', { teste: 'oi' })
      .subscribe((value: Response) => {
        console.log(Reflect.getMetadata('decription', value, 'teste1'));
      });
  }
}
