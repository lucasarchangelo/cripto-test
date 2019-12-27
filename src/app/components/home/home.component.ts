import { Component, OnInit } from '@angular/core';
import { TestesService } from 'src/app/shared/utils/testes.service';

import { Response } from '../../shared/models/response';
import { Request } from '../../shared/models/request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public responseGet: Response;
  public responsePost: Response;

  constructor(
    private readonly testeService: TestesService,
  ) { }

  ngOnInit() {
    this.testeService.get<Response>('http://www.mocky.io/v2/5dfed7dc3200006a005aef32', new Response())
      .subscribe((response: Response) => {
        console.log('GET Response: ', response);
        this.responseGet = response;
      });
    
    this.testeService.post<Response>('http://www.mocky.io/v2/5dfed7dc3200006a005aef32', {campo1: 'teste'}, new Request(), new Response())
      .subscribe((response) => {
        console.log('POST Response: ', response);
        this.responsePost = response;
      });
  }
}
