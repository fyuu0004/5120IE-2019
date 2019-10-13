import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-dod',
  templateUrl: './dod.component.html',
  styleUrls: ['./dod.component.css']
})
export class DodComponent implements OnInit {

  englishContent: string[] = ["Definition of difficult words", "", "Definition of difficult words", "Posted on August 28, 2019 by The 100 precent",
    "Q. What are modern awards?", "A. Modern Awards cover the minimum wages and conditions for workers in various industries and occupations across Australia. Key aspects of Modern Awards include overtime, penalty rates, allowances, superannuation and leave entitlements. There are more than 120 Modern Awards in Australia, which are protected by the Fair Work Act 2009.",
    "Q. What does the Fair Work Act do?", "A. The Fair Work Act 2009 sets the legislative and statutory framework that governs Australia’s workplace relations system. It is Australia’s key piece of workplace relations legislation and guides the minimum entitlements and standards to all Australian workers.",
    "Q. Why was the Fair Work Act 2009 introduced?", "A. The Fair Work Act 2009 was introduced to govern Australia's workplace relations system and legislate for the entitlements available to Australian workers.",
    "Q. What does the Fair Work Act cover?", "A. The Fair Work Act 2009 covers Australia’s workplace relations system, outlining the rules, entitlements and obligations for employees and employers that define Australian workplaces. The Act also gives employees and employers a guaranteed safety net of fair, relevant and enforceable minimum terms and conditions through the National Employment Standards (NES), Modern Awards and National Minimum Wage orders.",
    "More information", "How many work classifications are there?", "Posted on August 28, 2019, The 100 precent",
    "Definition of difficult words", "Work classifications", "Communicate to your boss", "Back"];
  chineseContent: string[] = ["相关名词的定义", "发布于 8/28, 2019。作者：100%", "相关名词的定义", "发布于 8/28, 2019。作者：100%",
    "Q. 什么是现代奖励机制", "A. 现代奖项涵盖了澳大利亚不同行业和职业的工人的最低工资和工作条件。现代奖励的主要方面包括加班、罚款率、津贴、退休金和休假权利。澳大利亚有120多个现代奖项，受到2009年《公平工作法案》的保护。",
    "Q. 公平工作法案是做什么的?", "A.《2009年公平工作法》为管理澳大利亚的工作场所关系体系制定了立法和法定框架。它是澳大利亚工作场所关系立法的关键部分，指导所有澳大利亚工人的最低权利和标准。",
    "Q. 2009年《公平工作法》为何出台?。", "A. 2009年通过的《公平工作法》(Fair Work Act 2009)旨在管理澳大利亚的工作场所关系体系，并为澳大利亚工人享有的福利制定法律。",
    "Q. 《公平工作法》包括哪些内容?", "A. 《2009年公平工作法》涵盖了澳大利亚的工作场所关系体系，概述了界定澳大利亚工作场所的员工和雇主的规则、权利和义务。该法案还通过国家就业标准(NES)、现代奖励和国家最低工资令，为雇员和雇主提供公平、相关和可执行的最低条款和条件的保障安全网。",
    "更多文章", "有多少工作分类?", "发布于 8/28, 2019。作者：100%",
    "相关定义", "工作分级", "与老板交流", "后退"];
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
