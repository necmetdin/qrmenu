import { Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Categories } from '../shared/models/Categories';
import { environment } from '../environments/environment';
import { MatTableModule } from '@angular/material/table'  
import { ProductsModel } from '../shared/models/ProductsModel';
import { CategoryModel } from '../shared/models/CategoryModel';
import { TranslationModel } from '../shared/models/TranslationModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  
})

export class MainComponent  implements OnInit {
  constructor(
    private apiService: ApiService,private router: Router) {}
    public environment = environment;
    displayedColumns: string[] = ['DESCRIPTION','PRICE'];
    language = 'tr';
    categories: any;

  ngOnInit() {
   
    let language = localStorage.getItem("language");
    if(!language)
    {
      localStorage.setItem("language","tr");
    }
    
    this.language = localStorage.getItem("language")|| 'tr';
    this.get();
    
  }
  changeLanguage(lang: string)
  {

    localStorage.setItem("language",lang);
    window.location.reload();

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
    this.apiService
      .makeGetRequest<Categories>(
        environment.endpointUrl +
          'api/groups/list' 
      )
      .subscribe({
        next: (result) => {
            this.categories = result;
            
            this.categories.forEach((element: {
              products: any;
              DESCRIPTION: string | undefined;
              translations: TranslationModel[]; }) => {
              let translations = element.translations; 
                         
              translations.forEach((trans: TranslationModel) => {
                if(trans.LANGUAGE_ID == this.getLanguage())
                  element.DESCRIPTION = trans.DESCRIPTION;
                  
       
              });
              element.products.forEach((element: {
                DESCRIPTION: string | undefined;
                translations: TranslationModel[]; }) => {
                let translations = element.translations;            
               
                translations.forEach((trans: TranslationModel) => {
              
                  if(trans.LANGUAGE_ID == this.getLanguage())
                  {
                    console.log(trans.DESCRIPTION);
                    element.DESCRIPTION = trans.DESCRIPTION;
                  }
                });
              });
             
            });
            
        },
        error: (e) => {
          console.log(e);
        },
      });
    
  }
 
}