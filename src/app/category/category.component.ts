import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

import { environment } from '../environments/environment';
import { Categories } from '../shared/models/Categories';

import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
    ) {}
    language ='tr';    
    categories: any;
    ngOnInit() {
      this.get();
      
    /*  this.apiService.RequiredRefresh.subscribe((r) => {
        this.get();
      });*/
    }
    getLanguage()
    {
      switch (this.language) {
        case 'de':
        {
          return 2;
          
        }
        case 'en':
        {
          return  3;
          
        }
        case 'ru':
        {
          return  4;
           
        }
      
        default:
          return  1;
         
      }
    }
    get() {

    
  
    this.language = localStorage.getItem("language") || 'tr';
      
      this.apiService
        .makeGetRequest<Categories>(
          environment.endpointUrl +
            'api/groups/list/'
        )
        .subscribe({
          next: (result) => {
            
            this.categories = result;
            this.categories.forEach((element: any) => {
              
              element.DESCRIPTION = 'ww';
            });
            //console.log(this.myCat);
            
                      
          },
          error: (e) => {
            console.log(e);
          },
        });
      
    }
    
    openCategory(id: any)
    {
      this.router.navigate(['/producten/5']);
    }
}

