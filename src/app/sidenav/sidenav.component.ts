import { Component, HostBinding, OnInit } from '@angular/core';
import { sidenavService } from './sidenav.service';
import { ApiService } from '../shared/services/api.service';
import { Categories } from '../shared/models/Categories';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { TranslationModel } from '../shared/models/TranslationModel';
import { CategoryModel } from '../shared/models/CategoryModel';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent  implements OnInit {
  constructor(public sidenavService: sidenavService,
    private apiService: ApiService,private router: Router) {}
    language = 'tr';
    categories: any;

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidenavService.isExpanded;
  }
  ngOnInit() {
    let l = localStorage.getItem("language");
    if(!l)
    {
     
      localStorage.setItem("language","tr");
    }
    this.language = localStorage.getItem("language")|| 'tr';
    this.get();
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
          
          this.categories = result;
          this.categories.forEach((element: {
            DESCRIPTION: string | undefined;
            translations: TranslationModel[]; }) => {
            let translations = element.translations;
          
            translations.forEach((trans: TranslationModel) => {
              if(trans.LANGUAGE_ID ==  this.getLanguage())
                element.DESCRIPTION = trans.DESCRIPTION;
              
            });
      
          
          });
                    
        },
        error: (e) => {
          console.log(e);
        },
      });
    
  }
  onGoToAnchor(anchor: string) {
    
    let path = "/ww#"+anchor;
    alert(path);
    this.router.navigate( ['/',anchor ], {fragment: anchor});
    
  }
}