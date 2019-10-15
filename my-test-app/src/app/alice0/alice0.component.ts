import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-alice0',
  templateUrl: './alice0.component.html',
  styleUrls: ['./alice0.component.css']
})
export class Alice0Component implements OnInit {

  englishContent: string[] = ["So you’re interested in finding fair work? You’ve come to the right place!", "70% of International students like you face harassment and underpayment. Over $1 billion dollars of fair pay has gone unclaimed for these students alone.",
    "We have provide some quick solutions for you: ", "Do you know how many levels are there in Australia job market?", "请记住：如果您不习惯阅读英语，可以通过单击右上角的按钮将我们的整个网站翻译成中文。",
    "Step1", "Step2", "Step3", "See information about levels", "Do you know information regarding difficult words such as modern awards?", "See information about difficult words",
    "Do you want to find a job which matches your skills?", "Go to Skill Matcher"];
  chineseContent: string[] = ["看上去你想找个好工作？那你来对地方了！", "70％的国际学生像你一样面临困扰和不公平支付。 超过10亿美元的公平薪酬就这样消失了。", "我们提供了一些快速解决方案：", "你知道澳洲工作市场中的等级是什么意思吗？",
    "请记住：如果您不习惯阅读英语，可以通过单击右上角的按钮将我们的整个网站翻译成中文。", "步骤1", "步骤2", "步骤3", "关于工作等级", "你知道award和公平工作网站是什么吗？", "关于疑难词汇", "你想找一份适合你技能的工作吗？", "技能匹配"];
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
