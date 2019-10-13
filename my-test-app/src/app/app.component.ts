import { Component ,OnInit} from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  payCheckerNeedDropDown: boolean;
  informationNeedDropDown: boolean;
  englishContent: string[] = ["19Th dollar", "Home", "Pay Checker", "Information", "Related Information", "What Next?", "Contact Fair Work", "Helpful Videos", "About", "中文版", "Functions", "Decision Maker", "Functions", "Skill Matcher"];
  chineseContent: string[] = ["19 刀", "主页", "工资检查", "信息", "相关信息", "步骤", "联系协会", "相关视频", "关于", "English Version", "功能", "决策帮助", "功能", "技能匹配"];
  showContent: string[] = [];

  ngOnInit() {
    this.payCheckerNeedDropDown = false;
    this.informationNeedDropDown = false;
    this.languageService.languageChang.subscribe(value => this.languageCheck(value));
    this.languageService.setLanguage("en");
    this.languageCheck(this.languageService.getLanguage());
  }

  payCheckerEnter(value) {
    this.payCheckerNeedDropDown = true;
  }

  payCheckerLeave(value) {
    this.payCheckerNeedDropDown = false;
  }

  informationEnter(value) {
    this.informationNeedDropDown = true;
  }

  informationLeave(value) {
    this.informationNeedDropDown = false;
  }

  onLanguageChange() {
    if (this.languageService.getLanguage() === "en") {
      this.languageService.setLanguage("cn");
    }
    else if (this.languageService.getLanguage() === "cn") {
      this.languageService.setLanguage("en");
    }
  }

  constructor(private languageService: LanguageService) {

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
