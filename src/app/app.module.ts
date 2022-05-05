import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { TranslationComponent } from './translation/translation.component';
import { SectionComponent } from './section/section.component';

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NavigationComponent } from './navigation/navigation.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { RatingComponent } from './rating/rating.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { MonthDatePipe } from './pipes/month-date.pipe';
import { PojectsComponent } from './pojects/pojects.component';
import { FooterComponent } from './footer/footer.component';
import { PdfComponent } from './pdf/pdf.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TranslationComponent,
    SectionComponent,
    NavigationComponent,
    TechStackComponent,
    RatingComponent,
    SkillsComponent,
    ExperienceComponent,
    MonthDatePipe,
    MonthDatePipe,
    PojectsComponent,
    FooterComponent,
    PdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
