import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-alice1',
  templateUrl: './alice1.component.html',
  styleUrls: ['./alice1.component.css']
})
export class Alice1Component implements OnInit {

  englishContent: string[] = ["How many work classifications are there?", "", "How many work classifications are there?", "Posted on August 28, 2019 by The 100 precent",
    "Q. How many work classifications are there?", "1.	Level 1 = An employee at Level 1 has less than three months’ experience in the industry or enterprise, and does not possess recognised enterprise or industrial or prior learning experience and/or skills sufficient for appointment to Level 2 or above. Provided that the length of service required to advance to Level 2 for a seasonal employee is four weeks and for a casual employee is 152 hours.",
    "2. Level 2 = An employee at Level 2 is an employee who has either: • completed a structured induction program over three months or for such shorter period as is necessary to reach the required level of competency for appointment to Level 2• has recognised enterprise or industrial experience, training or prior learning experience and / or skills to Level 2.",
    "3.	Level 3 = An employee at Level 3 is an employee who has either: • Completed an Australian Qualifications Framework(AQF) Certificate 1 • Has equivalent recognised enterprise or industrial experience, training or prior learning experience and / or skills to Level 3.",
    "4.	Level 4 = An employee at Level 4 is an employee who has either: • Completed an AQF Certificate 2 • Has equivalent recognised enterprise or industrial experience, training or prior learning experience and / or skills to Level 4.",
    "5.	Level 5 = An employee at Level 5 is an employee who has either: • Completed an AQF Certificate 3 • Has equivalent recognised enterprise or industrial experience, training or prior learning experience and / or skills to Level 5.",
    " 6.	Level 6 = An employee at Level 6 is an employee who has completed the following training requirement above that for Level 5: • two competency units from the Associate Diploma of Food Technology(ADFT) • six competency units from the Advanced Certificate of Food Technology(ACFT) • six competency units above the requirement for Level 5 • equivalent.",
    "More information", "Definition of diffcult words", "Posted on August 28, 2019, The 100 precent", "Next  ->"];
  chineseContent: string[] = ["有多少工作分类?", "", "发布于 8/28, 2019。作者：100%",
    "Q. 有多少工作分类?", "1.	第1级=第1级的雇员在业内或企业的工作经验少于3个月，而不具备认可的企业或行业或先前的学习经验及/或技能，不足以获聘为第2级或以上。假设季节性雇员晋升至第2级所需的服务时间为四周，而临时工则为152小时。",
    "2. 级别2 =级别2的员工有以下两种情况之一: •在3个月或更短的时间内完成一个结构化的入职培训计划，以达到招聘2级所需的能力水平 •具有企业或行业经验、培训或之前的学习经验和/或技能，达到二级。",
    "3.级别3 =级别3的员工有以下两种情况之一: •完成澳大利亚资格框架(AQF)证书 •具有同等的企业或行业经验、培训或之前的学习经验和/或技能，达到3级。",
    "4. 级别4 =级别4的员工有以下两种情况之一: •完成AQF证书2 •具有同等的企业或行业经验、培训或之前的学习经验和/或技能，达到四级。",
    "5.	级别5 =级别5的员工有以下两种情况之一: •完成AQF证书 •具有同等的企业或行业经验、培训或之前的学习经验和/或技能，达到5级。",
    "6.	6级= 6级员工是指完成了5级以上培训要求的员工: •食物科技副文凭课程(ADFT)的两个能力组别 •食品技术高级证书(ACFT)六个资质单元 •超过5级要求的6个能力单元 •等价的。",
    "更多文章", "相关名词的定义", "发布于 08 / 28, 2019, 100%", "下一步"];
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
