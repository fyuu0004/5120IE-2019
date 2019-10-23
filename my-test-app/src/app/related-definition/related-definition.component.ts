import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-related-definition',
  templateUrl: './related-definition.component.html',
  styleUrls: ['./related-definition.component.css']
})
export class RelatedDefinitionComponent implements OnInit {

  englishContent: string[] = ["Information", "Fair Work Information", "Definitions of related information", "Definition of difficult words", "Posted on August 28, 2019, The 100 precent",
    "How many work classifications are there?", "Posted on August 28, 2019, The 100 precent", "How to communication with your boss?", "Posted on August 28, 2019, The 100 precent", "Popular Article", "Definition of difficult words", "Posted on August 28, 2019, The 100 precent"];
  chineseContent: string[] = ["我们提供相关信息", "信息分类", "定义", "相关名词的定义", "发布于 8/28, 2019。作者：100%",
    "有多少工作分类?", "发布于 8/28, 2019。作者：100%", "如何和你的老板交流?", "发布于 8/28, 2019。作者：100%", "受欢迎的文章", "相关名词的定义", "发布于 8/28, 2019。作者：100%"];
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
