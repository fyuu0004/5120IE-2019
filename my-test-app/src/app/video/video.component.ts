import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  englishContent: string[] = ["Video", "Video Links", "Official video", "General video", "How do employees make an unfair dismissal claim? Fair Work Commission", "Posted on November 25, 2013, FairWorkAu",
    "Melbourne offices location tour - Fair Work Commission", "Posted on November 25, 2013, FairWorkAu", "Annual Wage Review 2018-19 decision", "Posted on May 30, 2019, FairWorkAu",
    "Why you should know how much your coworkers get paid | David Burkus", "Posted on October 11, 2016, TED",
    "Popular Videos", "Melbourne offices location tour - Fair Work Commission", "Posted on November 25, 2013, FairWorkAu", "Why you should know how much your coworkers get paid | David Burkus", "Posted on October 11, 2016, TED"];
  chineseContent: string[] = ["我们提供相关视频", "视频分类", "官方视频", "普通视频", "员工如何提出不公平的解雇要求?公平工作委员会", "发布于 09 / 25, 2013, FairWorkAu",
    "墨尔本办事处地点之旅-公平工作委员会", "发布于 09 / 25, 2013, FairWorkAu", "《2018-19年度工资审查决定》", "发布于 05 / 30, 2019, FairWorkAu",
    "为什么你应该知道你的同事拿多少钱？", "发布于 10 / 11, 2016, TED",
    "受欢迎的视频", "墨尔本办事处地点之旅-公平工作委员会", "发布于 09 / 25, 2013, FairWorkAu", "为什么你应该知道你的同事拿多少钱？", "发布于 10 / 11, 2016, TED"];
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
