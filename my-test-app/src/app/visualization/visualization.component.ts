import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  englishContent: string[] = ["Step1", "Step2", "Step3", "Step4", "Home", "Decision Maker"];
  chineseContent: string[] = ["步骤1", "步骤2", "步骤3", "步骤4", "首页", "决策帮助"];
  showContent: string[] = [];

  visualisationNo: number = 1;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.languageChang.subscribe(value => this.languageCheck(value));
    this.languageCheck(this.languageService.getLanguage());
  }

  languageCheck(lang: string) {
    if (lang === "en") {
      this.showContent = this.englishContent;
    }
    else if (lang === "cn") {
      this.showContent = this.chineseContent;
    }
  }

  visualisationOne() {
    this.visualisationNo = 1;
  }

  visualisationTwo() {
    this.visualisationNo = 2;
  }

  visualisationThree() {
    this.visualisationNo = 3;
  }

  visualisationFour() {
    this.visualisationNo = 4;
  }
}
