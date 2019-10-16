import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-talk-to-boss',
  templateUrl: './talk-to-boss.component.html',
  styleUrls: ['./talk-to-boss.component.css']
})
export class TalkToBossComponent implements OnInit {

  englishContent: string[] = ["Talk to your boss", "", "Talk to your boss", "Posted on August 28, 2019 by The 100 precent", "1. Do your research: check your company’s website or job-listings sites for roles similar to yours so you can see what they’re offering. Read the job descriptions to see how they measure up to yours. Do you have the necessary skills to meet that pay range?",
    "2. Make a list of all your skills and qualifications and include any training programs you’ve completed.", "3. Find out whether an award covers your role.", "4. Give your contract (or award) and job description a thorough read. Have you taken on extra duties that you need to address?",
    "5. Talk to your co-workers about your concerns if you feel comfortable doing so. They may be willing to be open about their salaries, so you can ask why they think their pay rates are higher than yours. You may find that they have greater skills or that they’ve been working for longer than you have.",
    "6. Make a time to meet with your manager and show them your research, explaining why you think they’re underpaying you.", "7. Ask for a salary review and ensure they’re aware of any new and improved attributes that will enhance your work.",
    "Definition of difficult words", "Work classifications", "Communicate to your boss", "Back"];
  chineseContent: string[] = ["和你的老板谈谈", "和你的老板谈谈", "如果你觉得你的雇主给你少了：", "1. 研究一下：去公司网站或者招工网站上搜索与你相同职位的待遇是什么样的。阅读职位的详细信息来了解他们的标准是什么，你是否有该职位要求的技能。", "2. 列出你的技能，资质和所有你完成的培训。",
    "3. 奖金是否对你有影响？", "4. 仔细阅读你的合同和工作细则。", "5. 如果可以的话和你的同事聊聊。",
    "6. 找个时间和你的上司谈谈并向他展示你所收集的和研究的成功。", "7. 询问薪水并确认他们了解所有新的信息。", "相关定义", "工作分级", "与老板交流", "后退"];
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
