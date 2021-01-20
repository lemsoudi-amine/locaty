import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'embryo-LanguageDropDown',
  templateUrl: './LanguageDropDown.component.html',
  styleUrls: ['./LanguageDropDown.component.scss']
})
export class LanguageDropDownComponent implements OnInit {

   currentLang = 'fr';

   langArray = [
      {
         name: 'English',
         value: 'en'
      }, {
         name: 'French',
         value: 'fr'
      }
   ];

   constructor(public translate: TranslateService) { }

   ngOnInit() {
   }

}
