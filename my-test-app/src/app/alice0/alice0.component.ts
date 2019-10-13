import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-alice0',
  templateUrl: './alice0.component.html',
  styleUrls: ['./alice0.component.css']
})
export class Alice0Component implements OnInit {

  englishContent: string[] = ["So you’re interested in finding fair work? You’ve come to the right place!", "70% of International students like you face harassment and underpayment. Over $1 billion dollars of fair pay has gone unclaimed for these students alone.",
    "We want you to find work that will pay you fairly.", "Our website will guide you through two pages of legal information we would like you to know before you enter the workforce. We will then guide you through some trends in employment and payment across Australia.",
    "请记住：如果您不习惯阅读英语，可以通过单击右上角的按钮将我们的整个网站翻译成中文。", "Step1", "Step2", "Step3"];
  chineseContent: string[] = ["看上去你想找个好工作？那你来对地方了！", "70％的国际学生像你一样面临困扰和不公平支付。 超过10亿美元的公平薪酬就这样消失了。", "我们希望你找到一份好的工作", "我们的网站将引导您使用公平薪酬计算器，该计算器显示您应该为您正在进行的工作获得的工资信息。 从那里，我们的网站将指导您为您的未来做出最佳决策。 有很多方法可以缓解您可能遇到的任何情况",
    "请记住：如果您不习惯阅读英语，可以通过单击右上角的按钮将我们的整个网站翻译成中文。", "步骤1", "步骤2", "步骤3"];
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
