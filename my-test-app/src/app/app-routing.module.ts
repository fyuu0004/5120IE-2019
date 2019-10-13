import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PayCheckerComponent } from './pay-checker/pay-checker.component';
import { RelatedDefinitionComponent } from './related-definition/related-definition.component';
import { DodComponent } from './dod/dod.component';
import { LevelComponent } from './level/level.component';
import { StepsComponent } from './steps/steps.component';
import { ContactWelfareComponent } from './contact-welfare/contact-welfare.component';
import { VideoComponent } from './video/video.component';
import { GeneralVideoComponent } from './general-video/general-video.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TalkToBossComponent } from './talk-to-boss/talk-to-boss.component';
import { Alice0Component } from './alice0/alice0.component';
import { Alice1Component } from './alice1/alice1.component';
import { Alice2Component } from './alice2/alice2.component';
import { Alice3Component } from './alice3/alice3.component';
import { BobComponent } from './bob/bob.component';
import { DaisyComponent } from './daisy/daisy.component';
import { SkillMatcherComponent } from './skill-matcher/skill-matcher.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'paychecker',
    component: PayCheckerComponent
  },
  {
    path: 'related-definition',
    component: RelatedDefinitionComponent
  },
  {
    path: 'dod',
    component: DodComponent
  },
  {
    path: 'level',
    component: LevelComponent
  },
  {
    path: 'steps',
    component: StepsComponent
  },
  {
    path: 'contact-welfare',
    component: ContactWelfareComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'general-video',
    component: GeneralVideoComponent
  },
  {
    path: 'visualization',
    component: VisualizationComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  },
  {
    path: 'solutions',
    component: SolutionsComponent
  },
  {
    path: 'talk-to-boss',
    component: TalkToBossComponent
  },
  {
    path: 'alice0',
    component: Alice0Component
  },
  {
    path: 'alice1',
    component: Alice1Component
  },
  {
    path: 'alice2',
    component: Alice2Component
  },
  {
    path: 'alice3',
    component: Alice3Component
  },
  {
    path: 'bob',
    component: BobComponent
  },
  {
    path: 'daisy',
    component: DaisyComponent
  },
  {
    path: 'skill-matcher',
    component: SkillMatcherComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
