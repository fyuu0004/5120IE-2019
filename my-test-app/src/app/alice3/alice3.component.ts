import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-alice3',
  templateUrl: './alice3.component.html',
  styleUrls: ['./alice3.component.css']
})
export class Alice3Component implements OnInit {

  englishContent: string[] = ["Step1", "Step2", "Step3", "Step4", "Step5",
    "The decision maker journey starts by showing you the important employment projections for 2023. It shows a comparison of employment in 2018 and 2023. The visualisation shows what the trends in the sub-industries of the Industry selected.",
    "In the next step, you will be able to see employment across Victoria.",
    "In this step, employment in Victoria for 2014, 2018 and 2019 across industries is shown. The visualization shows what industries employ the most people in Industry selected.", "In the next step, you will be able to see part-time jobs for different occupations.",
    "In this step, the visualization answers the question for students all across Victoria. Select the different Occupations from the drop - down menu to understand what job you should be aiming to find in your region.", "In the next step, you will be able to see jobs by internet vacancy index for different occupations which are available online.",
    "Internet Vacancy Index is a measure calculated by the Labor Market portal after scouring through job posting websites like SEEK, Indeed, etc.,", "The visualization below depicts the occupations most often advertised for part-time work each year. Select the year from the drop-down to look at the most frequently posted occupation for that year.", "In the next step, you will be able to see jobs in retail, fast food and hospitality industry according to their minimum wage rate.",
    "In this step, minimum wage rates of part-time, casual and full-time jobs are shown across three different industries which are retail, fast-food and hospitality."];
  chineseContent: string[] = ["就业预测", "工作门户趋势", "职位与区域", "维州就业", "行业趋势", "决策者的旅程首先向您展示2023年的重要就业预测。它显示了2018年和2023年的就业情况比较。可视化显示了该行业子行业的趋势选择。",
    "以下视图提供了维州工作情况。", "在此步骤中，显示了维多利亚州2014年，2018年和2019年各行业的就业情况。 可视化显示哪些行业雇用了所选行业中最多的人员。", "以下视图提供了不同职业的兼职情况。",
    "在此步骤中，可视化为所有维多利亚州的学生回答了问题。从下拉菜单中选择不同的职业，以了解您应该在您所在地区找到的工作。", "在下一步中，您将能够通过互联网空缺指数查看可在线获得的不同职业的工作。",
    "互联网空缺指数是劳动力市场门户网站在搜索SEEK，indeed等职位发布网站后计算的一项指标，", "下面的可视化描述了每年最常为兼职工作做广告的职业。 从下拉列表中选择年份，以查看该年度最常发布的职业。", "在下一步中，您将能够根据他们的最低工资率看到零售，快餐和酒店业的工作。",
    "在这一步骤中，兼职，临时和全职工作的最低工资率显示在三个不同的行业，即零售，快餐和酒店业。"];
  showContent: string[] = [];

  visualisationNo: number = 1;

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

  visualisationOne() {
    this.visualisationNo = 1;
  }

  visualisationTwo() {
    this.visualisationNo = 2;
  }

  visualisationThree() {
    this.visualisationNo = 3;
  }

  visualisationFour() {
    this.visualisationNo = 4;
  }
}
