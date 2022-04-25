import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Translations} from "./translations";

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  /*Setting up default language*/
  language: Translations = Translations.PL;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.language);
    translate.use(this.language);
  }

  ngOnInit(): void {
  }

  onChanage($event: Event) {
    let value = ($event.target as HTMLInputElement).value;
    this.translate.use(value)
    console.log(`Language changed to ${value}`)
  }
}
