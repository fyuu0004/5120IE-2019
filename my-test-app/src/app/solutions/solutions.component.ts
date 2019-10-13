import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  englishContent: string[] = ["We have some solutions for you", "Talk to your boss", "Do not be afraid to say this to your boss.", "See trends of works", "We got some visualisation for your.", "Legal actions", "Law protects you."];
  chineseContent: string[] = ["我们为你提供一些建议", "和你的老板谈谈", "在？看看工资", "了解就业趋势", "我们为你提供了一些走势图", "法律渠道", "律师函警告！"];
  showContent: string[] = [];

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
}
