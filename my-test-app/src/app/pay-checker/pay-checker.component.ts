import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TableService, HospitalityPFTable, HospitalityCausalTable, FastFoodCausalTable, RetailPFTable, RetaliCausalTable, FastFoodCausalPFTable } from '../table.service'
import { LanguageService } from '../language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { levelValidator, ageValidator, workTypeValidator } from '..//validators'






@Component({
  selector: 'app-pay-checker',
  templateUrl: './pay-checker.component.html',
  styleUrls: ['./pay-checker.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PayCheckerComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  //cdkStep: CdkStep;

  industries: string[] = ["Fastfood", "Retail", "Hospitality"];
  ages: string[] = [];
  workTypes: string[] = [];
  levels: string[] = [];

  hourlyPayRate: string = "";
  saturday: string = "";
  sunday: string = "";

  fastFoodCausalTable: FastFoodCausalTable[] = [];
  hospitalityPFTable: HospitalityPFTable[] = [];
  retailPFTable: RetailPFTable[] = [];
  retailCausalTable: RetaliCausalTable[] = [];
  fastFoodCausalPFTable: FastFoodCausalPFTable[] = [];
  hospitalityCausalTable: HospitalityCausalTable[] = [];
  tables: any[] = [];

  fastfoodPFages: string[] = [];
  fastfoodPFworkTypes: string[] = [];
  fastfoodPFlevels: string[] = [];
  retailPFages: string[] = [];
  retailPFworkTypes: string[] = [];
  retailPFlevels: string[] = [];
  hospitalityPFages: string[] = [];
  hospitalityPFworkTypes: string[] = [];
  hospitalityPFlevels: string[] = [];

  englishContent: string[] = ["Pay Checker", "Select your industry", "-----------Step 1-----------", "Age group", "-----------Step 2-----------", "Type of work", "-----------Step 3-----------", "Level",
    "-----------Step 4-----------", "Check Your Payment", "Complete these selections step by step and then click the button!", "Your Payment: ",
    "On Saturday: ", "On Sunday: ", "NOTE： The result calculated by pay checker is based on Victoria regulations in Australia.", "Your Result:", "Next",
    "If you do not paid tax for your income, the calculated result cannot be used as a reference for your payment standard.", "Fill out your details", "Back",
    "Your industry: ", "Your age group: ", "Your work type: ", "Your level: ", "On Weekdays: ", "Category of authority in an organization (You can see details in classification in related-information page ).",
    "What's the level?", "Are you satisfied with your payment?", "No", "Yes"];
  chineseContent: string[] = ["薪资计算器", "选择你的行业", "-----------步骤 1-----------", "年龄", "-----------步骤 2-----------", "工作类型", "-----------步骤 3-----------", "工作分级", "-----------步骤 4-----------",
    "计算！", "请按顺序填写并提交", "你的时薪为: ", "周六时为:", "周日时为:", "注意：该计算结果仅基于维州法规。", "计算结果：", "下一步", "如果您的工资没交税，那么该计算结果并不适用于您。", "填写详细信息",
    "返回", "你的行业： ", "你的年龄组： ", "你的工作类型： ", "你的等级： ", "周一到周五为: ", "你的技能以及该技能的证书（你可以在相关信息的分级中查看详情）。", "什么是工作等级？", "你对这个结果满意吗？", "否", "是"];
  showContent: string[] = [];

  turnUp: boolean = false;

  get ageErrorMessage(): string {
    return this.errorMessage('age');
  }

  get workTypeErrorMessage(): string {
    return this.errorMessage('worktype');
  }

  get levelErrorMessage(): string {
    return this.errorMessage('level');
  }

  constructor(private tableService: TableService, private languageService: LanguageService, private _formBuilder: FormBuilder) { }

  /*openBottomSheet(): void {
    this.bottomSheet.open(BottomSheet);
  }*/

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });


    this.secondFormGroup = this._formBuilder.group({
      age: ['', ageValidator()],
      worktype: ['', workTypeValidator()],
      level: ['', levelValidator()]
    });

    this.tableService.getFastFoodCausalPFTable().subscribe(table => this.fastFoodCausalPFTable = table);
    this.tableService.getHospitalityPFTable().subscribe(table => this.hospitalityPFTable = table);
    this.tableService.getRetailPFTable().subscribe(table => this.retailPFTable = table);

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

  private errorMessage(name): string {
    const control = this.secondFormGroup.controls[name];
    return ((control.touched || control.dirty) && control.invalid) ? this.showContent[20] : '';
  }

  getAllAge(table: any) {
    for (let i = 0; i < table.length; i++) {
      if (this.ages.indexOf(table[i].ageGruop) === -1) {
        this.ages.push(table[i].ageGruop);
        console.log(table[i].ageGruop)
      }
    }
  }

  prepareTable() {
    console.log(this.firstFormGroup.value.firstCtrl);
    console.log(this.secondFormGroup.value);
    if (this.firstFormGroup.value.firstCtrl === "Fastfood") {
      this.getAllAge(this.fastFoodCausalPFTable);
      this.tables = this.fastFoodCausalPFTable;
    }
    else if (this.firstFormGroup.value.firstCtrl === "Retail") {
      this.getAllAge(this.retailPFTable);
      this.tables = this.retailPFTable;
    }
    else if (this.firstFormGroup.value.firstCtrl === "Hospitality") {
      this.getAllAge(this.hospitalityPFTable);
      this.tables = this.hospitalityPFTable;
    }
  }

  getAllWorkType() {
    for (let i = 0; i < this.tables.length; i++) {
      if (this.secondFormGroup.value.age === this.tables[i].ageGruop) {
        if (this.workTypes.indexOf(this.tables[i].workType) === -1) {
          this.workTypes.push(this.tables[i].workType);
          console.log(this.tables[i].workType);
        }
      }
    }
  }

  getAllLevel() {
    for (let i = 0; i < this.tables.length; i++) {
      if (this.secondFormGroup.value.age === this.tables[i].ageGruop && this.secondFormGroup.value.worktype === this.tables[i].workType) {
        if (this.levels.indexOf(this.tables[i].level) === -1) {
          this.levels.push(this.tables[i].level);
          console.log(this.tables[i].level);
        }
      }
    }
  }

  submit() {
    for (let i = 0; i < this.tables.length; i++) {
      if (this.secondFormGroup.value.age === this.tables[i].ageGruop && this.secondFormGroup.value.worktype === this.tables[i].workType && this.secondFormGroup.value.level === this.tables[i].level) {
        if (this.firstFormGroup.value.firstCtrl === "Fastfood" || this.firstFormGroup.value.firstCtrl === "Hospitality") {
          this.hourlyPayRate = this.tables[i].hourlyPayRate;
          this.saturday = this.tables[i].saturday;
          this.sunday = this.tables[i].sunday;
          this.turnUp = true;
        }
        else if (this.firstFormGroup.value.firstCtrl === "Retail") {
          this.hourlyPayRate = this.tables[i].earlyMorningShift;
          this.saturday = this.tables[i].saturdayNotShift;
          this.sunday = this.tables[i].sundayNotShift;
          this.turnUp = true;
        }
      }
    }
  }

  industryChange() {
    this.ages = [];
    this.workTypes = [];
    this.levels = [];
    this.hourlyPayRate = "";
    this.saturday = "";
    this.sunday = "";
    this.secondFormGroup.reset({ age: null, worktype: null, level: null });
    console.log(this.ages);
    console.log(this.workTypes);
    console.log(this.levels)
  }

  detailChange() {
    this.hourlyPayRate = "";
    this.saturday = "";
    this.sunday = "";
  }

}

/*@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

for (let i = 0; i < FastfoodCausalPFTable.length; i++) {
          if (this.fastfoodPFages.indexOf(FastfoodCausalPFTable[i].ageGruop) === -1) {
            this.fastfoodPFages.push(FastfoodCausalPFTable[i].ageGruop);
          }
        }
}*/
