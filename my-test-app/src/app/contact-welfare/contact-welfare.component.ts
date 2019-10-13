import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact-welfare',
  templateUrl: './contact-welfare.component.html',
  styleUrls: ['./contact-welfare.component.css']
})
export class ContactWelfareComponent implements OnInit {

  englishContent: string[] = ["Contact Fair Work", "Contact Details", "Telephone number", "1300 799 675 within Australia", "+61 293 081 808 overseas", "The out of hours emergency number is: 0419 960 157",
    "Note: calls to this number will be charged at the international rate your service provider charges for these types of calls.", "Address", "Our Melbourne office is at: Level 4, 11 Exhibition Street Melbourne, Vic, 3000",
    "The postal address is: PO Box 1994, Melbourne, Vic, 3001", "Note: Our office opening hours are: 9am–5pm weekdays (excluding public holidays)", "Other ways", "The fax number is:	(03) 9655 0401", "The email address is: melbourne@fwc.gov.au",
    "Note: feel free to contact fair work commission to get help."];
  chineseContent: string[] = ["联系协会的方式", "联系细节", "电话号码", "1300 799 675 （在澳洲）", "+61 293 081 808 （在海外）", "紧急电话: 0419 960 157", "注意: 海外电话会收取跨国电话费。", "地址", "墨尔本公平协会地址 : Level 4, 11 Exhibition StreetMelbourne, Vic, 3000",
    "邮寄地址 : PO Box 1994, Melbourne, Vic, 3001", "注意我们协会的工作时间为 : 9am–5pm 工作日 (公共假日除外) ", "其他方式", "传真 : (03) 9655 0401", "电邮 : melbourne@fwc.gov.au"];
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
