import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Translations } from './translations';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
})
export class TranslationComponent implements OnInit {
  /*Setting up default language*/
  language: Translations = Translations.EN;

  constructor(public translate: TranslateService) {
    this.detectLanguage();
    translate.setDefaultLang(this.language);
    translate.use(this.language);
  }

  ngOnInit(): void {}
  detectLanguage() {
    if (navigator.language === 'pl-PL') this.language = Translations.PL;
    else this.language = Translations.EN;
  }
  changeLanguage(language: Translations): void {
    this.language = language;
    this.translate.use(this.language);
  }

  value = 'value';
  isToggled = false;

  onChanage(value: string): void {
    value === 'pl'
      ? this.changeLanguage(Translations.PL)
      : this.changeLanguage(Translations.EN);
  }

  onOptionClick(value: string) {
    this.onChanage(value);
    this.value = value;
    this.isToggled = !this.isToggled;
  }
  toggleMenu() {
    this.isToggled = !this.isToggled;
    console.log('toggle');
  }
}
