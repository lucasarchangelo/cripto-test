import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TestesService } from 'src/app/shared/utils/testes.service';
import { of } from 'rxjs';
import { MenuComponent } from 'src/app/menu/menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let testeServicesValue: jasmine.SpyObj<TestesService>;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {

    const spyTesteServices = jasmine.createSpyObj('TestesService', ['post', 'get']);

    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
      ],
      providers: [ 
        { provide: TestesService, useValue: spyTesteServices },
       ],
       schemas:[ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testeServicesValue = TestBed.get(TestesService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    testeServicesValue.get.and.returnValue(of(new Response()));
    testeServicesValue.post.and.returnValue(of(new Response()));
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a Response object type', fakeAsync(() => {
    testeServicesValue.get.and.returnValue(of(new Response()));
    testeServicesValue.post.and.returnValue(of(new Response()));
    expect(component.responseGet)
      .toBeDefined();
    expect(component.responsePost)
      .toBeDefined();
  }));
});
