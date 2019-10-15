import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  englishContent: string[] = ["What's Next?", "What Next?", "Here are a few suggestions you should follow in order to decide what your next steps might be: ", "Step 1: Are you sure you have been underpaid for a while now?", "Posted on August 25, 2019", "Loss of pay can occur in cases of genuine misunderstanding as well. Issues with databases and payroll records have been frequently cited as genuine reasons for sudden drop in pay rates. If you feel like this might be a problem, you are entitled to back-pay by the employer. Information regarding the steps that need to be taken by your employer can be found here.If you have yet to utilize our Fair Pay - Checker Calculator in order to discern this, please visit the page ",
    "(here)", "Step 2: Allowing the Fair Work Ombudsman to Intervene in the process", "Posted on August 25, 2019", "Under the Fair Work Act, you are fully entitled to receiving fair wages depending on your age, industry, level & type of work. If you do not know what this means, please visit this page to equip yourself with the corresponding lingo ",
    "(here)", "The Fair Work Ombudsman is the legal authority that protects your rights at work. Allowing them to mediate between you and your employer could prove beneficial to you. If you do not feel comfortable involving them into this situation, you may report your employer anonymously using their Tip Off service.This service can be utilized in your native language proficiency",
    "(here)", "Step 3: Read About What Happens Next…", "Posted on August 25, 2019", "The Fair Work website cites various stories of International Students who have faced what you might be going through. When she was unfairly dismissed, Jia Ning Wang, a Chinese International student, reported her employer using the Fair Work’s tip - off service. Not only was Jia Wang offered a fair wage for the hours she worked, she was also assisted with a $72000 compensation for the difficulties the employer caused to her and her education.Read about Jia Ning Wang’s story about being unfairly paid and suffering through poor work conditions",
    "(here)"];
  chineseContent: string[] = ["指引", "下一步？", "指引连接", "第1步：你确定你已经被不公平支付了一段时间吗？", "发布于 August 25, 2019", "在真正的误解的情况下也可能发生工资损失。 数据库和工资单记录的问题经常被认为是工资率突然下降的真正原因。 如果您认为这可能是一个问题，您有权由雇主支付。 有关雇主需要采取的步骤的信息可以在这里找到（这里）。如果您尚未使用我们的公平支付 - 计算器计算器来识别这一点，请访问该页面",
    "(这里)", "第2步：允许公平工作监察员介入该过程", "发布于 August 25, 2019", "根据“公平工作法”，您完全有权根据您的年龄，行业，工作水平和类型获得公平的工资。 如果您不知道这意味着什么，请访问此页面以装备相应的术语",
    "(这里)", "公平工作调查专员是保护您工作权利的法律机构。允许他们在您和您的雇主之间进行调解可能对您有益。 如果您不愿意让他们参与这种情况，您可以使用他们的提示服务匿名举报您的雇主。这项服务可以用您的母语",
    "(这里)", "第3步：阅读下一步发生的事情......", "发布于 August 25, 2019", "公平工作网站引用了许多国际学生的故事，他们面对的是你可能正在经历的事情。 当她被不公平地解雇时，中国国际学生王嘉宁报告了她的雇主使用Fair Work的提示服务。 王嘉宁不仅为她工作的时间提供了公平的工资，还为雇主给她和她的教育带来的困难提供了72000美元的赔偿。阅读关于王嘉宁关于因工作不良而遭受不公平待遇和痛苦的故事。",
    "(这里)"];
  showContent: string[] =[];

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
