import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  englishContent: string[] = ["Empowering Chinese International Students in Victoria against Unfair Pay", "Pay Checker", "We provide three streams for different type of users. ", "Learn More", " and explore more.",
    "Welcome to 19th Dollar", "The underpayment, abuse, and exploitation of the skilled labor provided by international students migrating from across the world has been a systemic issue over the last five years. This website aims to empower International students, offer legal and practical advice regarding decision-making and embolden them to defend their personal rights.",
    "“I do not know if I am earning fair wages for the hours I work. If you relate to my experience, click below to explore the website.”", "", "“I am interested in understanding the Victorian Job Market before deciding on what kind of work I would like to do while I study. If you relate to my experience, click below to explore the website.”", "",
    "“I know I am being unfairly paid for my work. What can I do? If you relate to my experience, click below to explore the website.”", "", "See more"];
  chineseContent: string[] = ["给在维州的中国学生力量去对抗不公平待遇", "工资检查", "我们为你提供了三种道路去游览整个网站。", "更多", "来探索更多。",
    "欢迎来到19刀网站", "过去五年来，从世界各地迁移的国际学生提供的熟练劳动力的少付，滥用和剥削已成为一个系统性问题。 该网站旨在为国际学生提供授权，为决策提供法律和实践建议，并鼓励他们捍卫自己的个人权利。",
    "有工作，不知道是否遭遇不公平薪资待遇", "", "没工作，不能流畅用英语交流", "",
    "有工作，知道遭遇了不公平薪资待遇", "", "了解更多"];
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

  jumpToPageTop() {
    window.scrollTo(0, 0);
  }
}
