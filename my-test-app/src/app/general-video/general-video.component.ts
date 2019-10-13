import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-general-video',
  templateUrl: './general-video.component.html',
  styleUrls: ['./general-video.component.css']
})
export class GeneralVideoComponent implements OnInit {

  englishContent: string[] = ["Videos", "Video Links", "Official video", "General video", "Why modern awards are important", "Posted on May 22, 2016, FairWorkGovAu",
    "The Gender Pay Gap (What Is The Truth?)", "Posted on May 06, 2018, Isaac Butterfield", "What is redundancy", "Posted on September 09, 2016, FairWorkGovAu", "How minimum wages work", "Posted on September 08, 2016, FairWorkGovAu",
    "Understanding public holidays", "Posted on September 08, 2016, FairWorkGovAu", "Popular Videos", "How minimum wages work", "Posted on September 08, 2016, FairWorkGovAu", "Why modern awards are important", "Posted on May 22, 2016, FairWorkGovAu"];
  chineseContent: string[] = ["我们提供相关视频", "视频分类", "官方视频", "普通视频", "为什么现代奖项如此重要?", "发布于 05 / 22, 2016, FairWorkGovAu", "性别收入差距(真相是什么?)", "发布于 05 / 06, 2018, Isaac Butterfield",
    "什么是冗余", "发布于 09 / 09, 2016, FairWorkGovAu", "最低工资怎么工作的？", "发布于 09 / 08, 2016, FairWorkGovAu", "了解公共假期", "发布于 09 / 08, 2016, FairWorkGovAu", "受欢迎的视频", "最低工资怎么工作的？", "发布于 09 / 08, 2016, FairWorkGovAu",
    "为什么现代奖项如此重要?", "发布于 05 / 22, 2016, FairWorkGovAu"];
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
