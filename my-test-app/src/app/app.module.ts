import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PayCheckerComponent } from './pay-checker/pay-checker.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RelatedDefinitionComponent } from './related-definition/related-definition.component';
import { StepsComponent } from './steps/steps.component';
import { ContactWelfareComponent } from './contact-welfare/contact-welfare.component';
import { VideoComponent } from './video/video.component';
import { GeneralVideoComponent } from './general-video/general-video.component';
import { DodComponent } from './dod/dod.component';
import { LevelComponent } from './level/level.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { VisualizationComponent } from './visualization/visualization.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TalkToBossComponent } from './talk-to-boss/talk-to-boss.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Alice0Component } from './alice0/alice0.component';
import { BobComponent } from './bob/bob.component';
import { DaisyComponent } from './daisy/daisy.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SkillMatcherComponent } from './skill-matcher/skill-matcher.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { NgZorroAntdModule, NZ_ICONS, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    PayCheckerComponent,
    RelatedDefinitionComponent,
    StepsComponent,
    ContactWelfareComponent,
    VideoComponent,
    GeneralVideoComponent,
    DodComponent,
    LevelComponent,
    VisualizationComponent,
    ThanksComponent,
    SolutionsComponent,
    TalkToBossComponent,
    Alice0Component,
    BobComponent,
    DaisyComponent,
    SkillMatcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    CdkStepperModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatTabsModule,
    NgZorroAntdModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    NzBreadCrumbModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
