import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-daisy',
  templateUrl: './daisy.component.html',
  styleUrls: ['./daisy.component.css']
})
export class DaisyComponent implements OnInit {

  englishContent: string[] = ["You know something is wrong with your working conditions. You’re most likely being harassed at work or feel like you. You work too many hours just for very little money. Does this sound like you?", "Go to the paychecker", "70% of International students like you face harassment and underpay. Over $1 billion dollars of fair pay has gone unclaimed for these students alone.",
    "We want you to find work that will pay you fairly.", "Our website will guide you through to a Fair Pay Calculator that displays information about the wages you should be receiving for the work you are doing. From there, our website will guide you through to make the best decision for you moving forward. There are a plethora of ways to mitigate whatever situation you may be in.",
    "The Fair Pay calculator will respond to information regarding your Industry of work, Level of Work and Type of Work to display your fair wage.", "Remember: If you’re not comfortable reading English, our entire website can be translated into Chinese by clicking the button on the top right."];
  chineseContent: string[] = ["你知道你的工作情况有些不对并面临困扰，而且听说你干的多赚的少？", "计算你的工资", "70％的国际学生像你一样面临困扰和不公平支付。 超过10亿美元的公平薪酬就这样消失了。", "我们希望你找到一份好的工作", "我们的网站将引导您使用公平薪酬计算器，该计算器显示您应该为您正在进行的工作获得的工资信息。 从那里，我们的网站将指导您为您的未来做出最佳决策。 有很多方法可以缓解您可能遇到的任何情况",
    "公平薪酬计算器将回复有关您的工作行业，工作水平和工作类型的信息，以显示您的公平工资。", "请记住：如果您不习惯阅读英语，可以通过单击右上角的按钮将我们的整个网站翻译成中文。"];
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
