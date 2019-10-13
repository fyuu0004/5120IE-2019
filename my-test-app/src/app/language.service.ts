import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languageChang: EventEmitter<string> = new EventEmitter();
  language: string;

  setLanguage(lang: string) {
    this.language = lang;
    this.languageChang.emit(lang);
  }

  getLanguage(): string {
    return this.language;
  }

  constructor() { }
}
