import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../language.service';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { TableService, JobFilterTable, RegionalForecastTable } from '../table.service'

@Component({
  selector: 'app-skill-matcher',
  templateUrl: './skill-matcher.component.html',
  styleUrls: ['./skill-matcher.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillMatcherComponent implements OnInit {

  englishContent: string[] = ["Skill Matcher (With Experience):", "1. Please select your industry:", "-----------Step 1-----------", "2. Please select your occupation (You can add at most three selections):", "-----------Step 2-----------", "Add", "3. Select a location where you want to find fair work:",
    "-----------Step 3-----------", "Find Your Match",
    "Industry: Fastfood", "Sub-Industry: ", " vacancies forecasted.", "Region: ", "This is the forecasted numbers of job-adverticements for this occupation & sub-industry for next month.", "Industry: Retail", "Industry: Hospitality", "Go Back", "Welcome to Skill Matcher",
    "Worried about finding another job? Not sure what job is the best fit for you? We’re here to help you out!", "Do you have any working experience?", "Yes", "No",
    "Skill Matcher (No Experience): ", "Communication Skill: ", "Building Relationships: ", "Team Work: ", "Detail-Oriented: ", "Planning: ", "Problem Solving: ", "Organisational Skills: ",
    "Time Management: ", "Project Management: ", "Research: ", "Please give a point from 0 to 10.", "For this industry, ", " is the most suitable sub-Industry for your condition.",
    "Evaluate yourself from 0 (Poor) to 10 (Excellent): ", "Score: ", "This feature is meant to help you match the best occupation for whatever situation you’re in. The feature uses data from job postings from SEEK and Indeed to create a prediction for the occupation that’s the best fit for your skill-set and that’s most in-demand in your region in Victoria!",
    "Since you’ve worked previously, enter all of the occupations you’ve had experience with in the past to help us find the best occupation for you to get into!",
    "Since you’re new to the job market and don’t have the experience, let us figure out the best occupation for you based on your soft-skills!",
    "To the left, you’ll notice a set of the Top 10 skills deemed important by employers on SEEK and Indeed. Please rate yourself on a scale from 0 (Poor) to 10 (Excellent). Be honest so that we can help you figure out what job you might be most likely to be hired for!",
    "Home", "Skill Matcher"];
  chineseContent: string[] = ["有工作经验：", "1.请选择你的行业：", "-----------步骤1-----------", "2.请选择你的职位(你最多能选三个)", "-----------步骤2-----------", "添加", "3.选一个你想工作的地点", "-----------步骤3-----------", "开始匹配",
    "快餐", "子产业", "个预期空缺", "地区：", "这是下个月对于本职业和子产业的预期职位空缺。", "零售", "招待", "后退", "欢迎你使用技能匹配功能", "本功能会帮助你找到最适合你职业技能的工作，资源来源于网上招工网站，如SEEK， Indeed等等。", "你有工作经验吗？",
    "有", "没有", "评价你自己：", "交流技巧: ", "人际关系: ", "团队合作: ", "注重细节: ", "计划规划: ", "解决问题: ", "组织能力: ", "时间管理: ", "项目管理: ", "学习研究: ", "请输入0到10的数字", "对于本行业", "是最适合你的子产业", "分数:",
    "此功能旨在帮助您在任何情况下都匹配最佳职业。该功能使用SEEK和Indeed职位发布中的数据来为最适合您的技能设置的职业创建预测，并且满足您所在的维多利亚地区的需求！", "由于您以前曾工作过，请输入您过去曾经经历过的所有职业，以帮助我们找到最适合您的职业！",
    "由于您是新手，而且没有经验，所以让我们根据您的软技能为您找出最佳的职业！", "在左侧，您会注意到SEEK和Indeed上雇主认为重要的十大技能。 请以0（差）至10（优秀）的等级为自己打分。 老实说，这样我们可以帮助您确定您最有可能被雇用的工作！",
    "首页", "技能匹配"];
  showContent: string[] = [];

  jobFilterTable: JobFilterTable[] = [];
  regionalForecastTable: RegionalForecastTable[] = [];
  tables: any[] = [];
  selectedOccupation: string[] = [];
  selectedScore: number[] = [];
  selectedSub: string[] = [];
  errorMsg: string = "";
  hidden: boolean = false;
  added: boolean = false;
  experience: boolean = false;
  standingBy: boolean = true;
  turnUp: boolean = false;
  softSkillPoint = 0;

  communicationSkills: number = 0;
  buildingRelationships: number = 0;
  teamWork: number = 0;
  detailOriented: number = 0;
  planning: number = 0;
  problemSolving: number = 0;
  organisationalSkills: number = 0;
  timeManagement: number = 0;
  projectManagement: number = 0;
  research: number = 0;

  industrys: string[] = ["Fast Food", "Retail", "Hospitality"];
  occupations: string[] = [];
  regions: string[] = [];
  scores: number[] = [];

  wpFastfoodRecom: string = "";
  wpRetailRecom: string = "";
  wpHospitalityRecom: string = "";

  npFastfoodRecom: string = "";
  npRetailRecom: string = "";
  npHospitalityRecom: string = "";

  fastfoodVac: number = 0;
  retailVac: number = 0;
  hospitalityVac: number = 0;

  wpFastfoodOccupation: string = "";
  wpRetailOccupation: string = "";
  wpHospitalityOccupation: string = "";

  npFastfoodOccupation: string = "";
  npRetailOccupation: string = "";
  npHospitalityOccupation: string = "";

  matcherFormGroupOne = new FormGroup({
    industryCtrl: new FormControl("", Validators.required),
    occupationCtrl: new FormControl("", Validators.required),
    scoreCtrl: new FormControl(),
  }, this.matcherValidator);

  matcherFormGroupTwo = new FormGroup({
    regionCtrl: new FormControl("", Validators.required),
  })

  matcherFormGroupThree = new FormGroup({
    communicationSkillsCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    buildingRelationshipsCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    teamWorkCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    detailOrientedCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    planningCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    problemSolvingCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    organisationalSkillsCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    timeManagementCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    projectManagementCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
    researchCtrl: new FormControl(0, [Validators.min(0), Validators.max(10), Validators.required]),
  })
  

  constructor(private tableService: TableService, private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.languageChang.subscribe(value => this.languageCheck(value));
    this.languageCheck(this.languageService.getLanguage());

    this.tableService.getJobFilterTable().subscribe(table => this.jobFilterTable = table);
    this.tableService.getRegionalForecastTable().subscribe(table => this.regionalForecastTable = table);
  }

  languageCheck(lang: string) {
    if (lang === "en") {
      this.showContent = this.englishContent;
    }
    else if (lang === "cn") {
      this.showContent = this.chineseContent;
    }
  }

  getOccupation() {
    this.matcherFormGroupOne.removeControl("occupationCtrl");
    this.matcherFormGroupOne.addControl("occupationCtrl", new FormControl("", Validators.required));
    console.log(this.matcherFormGroupOne.value.industryCtrl);
    console.log(this.matcherFormGroupOne.value.occupationCtrl);
    this.occupations = [];
    for (let i = 0; i < this.jobFilterTable.length; i++) {
      if (this.matcherFormGroupOne.value.industryCtrl === this.jobFilterTable[i].industry) {
        if (this.occupations.indexOf(this.jobFilterTable[i].occupation) === -1) {
          this.occupations.push(this.jobFilterTable[i].occupation);
          console.log(this.jobFilterTable[i].occupation);
        }
      } 
    }
  }

  addOccupation() {
    this.added = true;
    if (this.selectedOccupation.length < 3) {
      if (this.selectedOccupation.indexOf(this.matcherFormGroupOne.value.occupationCtrl) === -1) {
        this.selectedOccupation.push(this.matcherFormGroupOne.value.occupationCtrl);
        for (let i = 0; i < this.jobFilterTable.length; i++) {
          if (this.matcherFormGroupOne.value.industryCtrl === this.jobFilterTable[i].industry && this.matcherFormGroupOne.value.occupationCtrl === this.jobFilterTable[i].occupation) {
            this.selectedScore.push(this.jobFilterTable[i].totalScore);
            this.selectedSub.push(this.jobFilterTable[i].subIndustry);
            console.log(this.selectedOccupation);
            console.log(this.selectedScore);
            console.log(this.selectedSub);
          }
        }
        this.errorMsg = "";
      }
      else
        this.errorMsg = "You have added this occupation.";
    }
    else
      this.errorMsg = "Your can add at most three occupations."
  }

  removeOccupation(occupation: string) {
    for (let i = 0; i < this.selectedOccupation.length; i++) {
      if (occupation === this.selectedOccupation[i]) {
        this.selectedOccupation.splice(i, 1);
        this.selectedScore.splice(i, 1);
        this.selectedSub.splice(i, 1);
        console.log(this.selectedOccupation);
        console.log(this.selectedScore);
        console.log(this.selectedSub);
      }
    }
  }

  noOccupation() {
    console.log(this.selectedOccupation)
    if (this.selectedOccupation.length === 0) {
      this.errorMsg = "Please at least add one occupation.";
    }
  }

  matcherValidator(control: FormGroup): any {
    return control.get('industryCtrl').value || control.get('occupationCtrl').value === null ? null : { 'matchOneValid': false };
  }

  sliderValidator(): ValidatorFn {
    return (control: FormControl): { [key: string]: any } => {
      if (control.value) {
        if (control.value > 10 || control.value < 0) {
          return { sliderError: 'Please give a point between 0 to 10.' };
        }
        return null;
      }
    };
  }

  getRegion() {
    console.log(this.matcherFormGroupTwo.value.regionCtrl);
    for (let i = 0; i < this.regionalForecastTable.length; i++) {
      if (this.regions.indexOf(this.regionalForecastTable[i].region) === -1) {
        this.regions.push(this.regionalForecastTable[i].region)
        console.log(this.regionalForecastTable[i].region)
      }
    }
  }

  totalScore(): number {
    let score: number = 0;
    console.log(typeof (score))
    if (this.selectedScore.length !== 0) {
      for (let i = 0; i < this.selectedScore.length; i++) {
        score += Number(this.selectedScore[i]);
        console.log(typeof (this.selectedScore[i]))
        console.log(this.selectedScore[i])
        console.log("score:" + score);
      }
      console.log(this.selectedScore)
      console.log(score / this.selectedScore.length);
      console.log(typeof (score / this.selectedScore.length));
      return score / this.selectedScore.length;
    }
  }

  quickSort(table: any[], left: number, right: number) {
    if (left < right) {
      let index = this.pivot(table, left, right)
      this.quickSort(table, left, index - 1);
      this.quickSort(table, index + 1, right);
    }
    console.log(table)
  }

  pivot(table: any[], low: number, high: number): number {
    let i = low, j = high;
    let pivot = table[i];
    while (i < j) {
      while (i < j && table[j].totalScore >= pivot.totalScore)
        j--;
      if (i < j) {
        table[i] = table[j];
        i++;
      }

      while (i < j && table[i].totalScore < pivot.totalScore)
        i++;
      if (i < j) {
        table[j] = table[i];
        j--;
      }
    }
    table[i] = pivot;
    return i;
  }

  getClosest(table: any, score: number) {
    for (let i = 0; i < table.length; i++) {
      table[i].totalScore = Math.abs(table[i].totalScore - score);
    }
    this.quickSort(table, 0, table.length - 1);
    
  }

  bestMatch() {
    let fastfoodTable: any[] = [], retailTable: any[] = [], hospitalityTable: any[] = [];
    let table = this.jobFilterTable;
    this.getClosest(table, this.totalScore());
    for (let i = 0; i < table.length; i++) {
      if (this.jobFilterTable[i].industry === "Fast Food" && fastfoodTable.indexOf(this.jobFilterTable[i]) === -1) {
        fastfoodTable.push(this.jobFilterTable[i]);
      }
      else if (this.jobFilterTable[i].industry === "Retail" && retailTable.indexOf(this.jobFilterTable[i]) === -1) {
        retailTable.push(this.jobFilterTable[i]);
      }
      else if (this.jobFilterTable[i].industry === "Hospitality" && hospitalityTable.indexOf(this.jobFilterTable[i]) === -1) {
        hospitalityTable.push(this.jobFilterTable[i]);
      }
    }
    this.wpFastfoodRecom = fastfoodTable[0].subIndustry;
    this.wpRetailRecom = retailTable[0].subIndustry;
    this.wpHospitalityRecom = hospitalityTable[0].subIndustry;
    this.wpFastfoodOccupation = fastfoodTable[0].occupation;
    this.wpRetailOccupation = retailTable[0].occupation;
    this.wpHospitalityOccupation = hospitalityTable[0].occupation;

    for (let i = 0; i < this.regionalForecastTable.length; i++) {
      if (this.matcherFormGroupTwo.value.regionCtrl === this.regionalForecastTable[i].region && this.wpFastfoodRecom === this.regionalForecastTable[i].subIndustry) {
        this.fastfoodVac = this.regionalForecastTable[i].itVacEmp;
      }
      else if (this.matcherFormGroupTwo.value.regionCtrl === this.regionalForecastTable[i].region && this.wpRetailRecom === this.regionalForecastTable[i].subIndustry)
        this.retailVac = this.regionalForecastTable[i].itVacEmp;
      else if (this.matcherFormGroupTwo.value.regionCtrl === this.regionalForecastTable[i].region && this.wpHospitalityRecom === this.regionalForecastTable[i].subIndustry)
        this.hospitalityVac = this.regionalForecastTable[i].itVacEmp;
    }
    console.log(table) 
    this.hidden = true;
    window.scrollTo(0, 0);
  }

  matcherBack() {
    this.hidden = false;
  }

  softBack() {
    this.turnUp = false;
  }

  chooseYes() {
    this.standingBy = false;
    this.experience = true;
  }

  chooseNo() {
    this.standingBy = false;
    this.experience = false;
  }

  sliderValueLimit(value: number) {
    if (value > 10) {
      value = 10;
    }
  }

  softMatch() {
    let fastfoodTable: any[] = [], retailTable: any[] = [], hospitalityTable: any[] = [];
    let table = this.jobFilterTable;
    let totalPoint = this.communicationSkills * 10 + this.buildingRelationships * 9 + this.teamWork * 8 + this.detailOriented * 7 + this.planning * 6 + this.problemSolving * 5
      + this.organisationalSkills * 4 + this.timeManagement * 3 + this.projectManagement * 2 + this.research;
    this.getClosest(table, totalPoint);
    for (let i = 0; i < table.length; i++) {
      if (this.jobFilterTable[i].industry === "Fast Food" && fastfoodTable.indexOf(this.jobFilterTable[i]) === -1) {
        fastfoodTable.push(this.jobFilterTable[i]);
      }
      else if (this.jobFilterTable[i].industry === "Retail" && retailTable.indexOf(this.jobFilterTable[i]) === -1) {
        retailTable.push(this.jobFilterTable[i]);
      }
      else if (this.jobFilterTable[i].industry === "Hospitality" && hospitalityTable.indexOf(this.jobFilterTable[i]) === -1) {
        hospitalityTable.push(this.jobFilterTable[i]);
      }
    }
    this.npFastfoodRecom = fastfoodTable[0].subIndustry;
    this.npRetailRecom = retailTable[0].subIndustry;
    this.npHospitalityRecom = hospitalityTable[0].subIndustry;
    this.npFastfoodOccupation = fastfoodTable[0].occupation;
    this.npRetailOccupation = retailTable[0].occupation;
    this.npHospitalityOccupation = hospitalityTable[0].occupation;

    console.log(table)
    this.turnUp = true;
    window.scrollTo(0, 0);
  }

  experienceSwitch() {
    this.experience = true;
  }

  noExperienceSwitch() {
    this.experience = false;
  }
}
