import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export class FastFoodCausalTable {
  ageGruop: string;
  workType: string;
  level: string;
  hourlyPayRate: string;
  pmToMidnight: string;
  midnightToAm: string;
  saturday: string;
  sunday: string;
  publicHoliday: string;
  overtimeFirst: string;
  overtimeAfter: string;
  overtimeSunday: string;
  overtimePublicHoliday: string;
}

export class FastFoodCausalPFTable {
  ageGruop: string;
  workType: string;
  level: string;
  hourlyPayRate: string;
  weeklyPayRate: string;
  pmToMidnight: string;
  midnightToAm: string;
  saturday: string;
  sunday: string;
  publicHoliday: string;
  overtimeFirst: string;
  overtimeAfter: string;
  overtimeSunday: string;
  overtimePublicHoliday: string;
}

export class HospitalityPFTable {
  ageGruop: string;
  workType: string;
  level: string;
  hourlyPayRate: string;
  weeklyPayRate: string;
  pmToMidnight: string;
  midnightToAm: string;
  saturday: string;
  sunday: string;
  publicHoliday: string;
  publicHolidayAdditional: string;
  ChristmasDaySaturday: string;
  ChristmasDaySunday: string;
  overtimeFirst: string;
  overtimeAfter: string;
  overtimeSaturdayAndSunday: string;
  overtimeRDO: string;
  overnight: string;
}

export class HospitalityCausalTable {
  ageGruop: string;
  workType: string;
  level: string;
  hourlyPayRate: string;
  evening: string;
  nightwork: string;
  saturday: string;
  sunday: string;
  public: string;
  overtimeFirst: string;
  overtimeAfter: string;
  overtimeWeekend: string;
  overnight: string;
}

export class RetailPFTable {
  ageGruop: string;
  workType: string;
  level: string;
  saturdayNotShift: string;
  sundayNotShift: string;
  publicHolidayNotShift: string;
  shiftWork: string;
  earlyMorningShift: string;
  nightShift: string;
  saturdayShift: string;
  sundayShift: string;
  publicHolidayShift: string;
  lessThan: string;
  overtimeFirst: string;
  overtimeAfter: string;
  overtimeSunday: string;
  overtimePublicHoliday: string;
}

export class RetaliCausalTable {
  ageGruop: string;
  workType: string;
  level: string;
  hourlyPayRate: string;
  evening: string;
  saturdayNotShift: string;
  sundayNotShift: string;
  publicHolidayNotShift: string;
  shiftWork: string;
  earlyMorningShift: string;
  nightShift: string;
  saturdayShift: string;
  sundayShift: string;
  publicHolidayShift: string;
  lessThan: string;
  overtimeFirst: string;
  overtimeAfter: string;
  overtimeSunday: string;
  overtimePublicHoliday: string;
}

export class JobFilterTable {
  occupation: string;
  industry: string;
  communicationSkills: number;
  buildingRelationships: number;
  teamWork: number;
  detailOriented: number;
  planning: number;
  problemSolving: number;
  organisationalSkills: number;
  timeManagement: number;
  projectManagement: number;
  research: number;
  totalScore: number;
  subIndustry: string;
}

export class RegionalForecastTable {
  number: number;
  region: string;
  subIndustry: string;
  year: string;
  itVacEmp: number;
  industry: string;
}

const fastFoodCausalTableUrl = "https://www.the19dollar.ml/api/FastFoodCausal.php";
const fastFoodCausalPFTableUrl = "https://www.the19dollar.ml/api/FastFoodCausalPF.php";
const hospitalityPFTableUrl = "https://www.the19dollar.ml/api/HospitalityPF.php";
const hospitalityCausalTableUrl = "https://www.the19dollar.ml/api/HospitalityCausal.php";
const retailPFTableUrl = "https://www.the19dollar.ml/api/RetailPF.php";
const retaliCausalTableUrl = "https://www.the19dollar.ml/api/RetaliCausal.php";
const jobFilterTableUrl = "https://www.the19dollar.ml/api/jobfilter.php";
const regionalForecastTableUrl = "https://www.the19dollar.ml/api/regional_forecast.php";

@Injectable({
  providedIn: 'root'
})

export class TableService {

  fastFoodCausalTable: FastFoodCausalTable[];
  fastFoodCausalPFTable: FastFoodCausalPFTable[];
  hospitalityPFTable: HospitalityPFTable[];
  hospitalityCausalTable: HospitalityCausalTable[];
  retailPFTable: RetailPFTable[];
  retaliCausalTable: RetaliCausalTable[];
  jobFilterTable: JobFilterTable[];
  regionalForecastTable: RegionalForecastTable[];

  constructor(private httpclient: HttpClient) {

  }

  getFastFoodCausalTable(): Observable<FastFoodCausalTable[]> {
    if (this.fastFoodCausalTable == null) {
      return this.httpclient.get<FastFoodCausalTable[]>(fastFoodCausalTableUrl).pipe(tap(table => this.fastFoodCausalTable = table));
    }
    return of(this.fastFoodCausalTable);
  }

  getFastFoodCausalPFTable(): Observable<FastFoodCausalPFTable[]> {
    if (this.fastFoodCausalPFTable == null) {
      return this.httpclient.get<FastFoodCausalPFTable[]>(fastFoodCausalPFTableUrl).pipe(tap(table => this.fastFoodCausalPFTable = table));
    }
    return of(this.fastFoodCausalPFTable);
  }

  getHospitalityPFTable(): Observable<HospitalityPFTable[]> {
    if (this.hospitalityPFTable == null) {
      return this.httpclient.get<HospitalityPFTable[]>(hospitalityPFTableUrl).pipe(tap(table => this.hospitalityPFTable = table));
    }
    return of(this.hospitalityPFTable);
  }

  getHospitalityCausalTable(): Observable<HospitalityCausalTable[]> {
    if (this.hospitalityPFTable == null) {
      return this.httpclient.get<HospitalityCausalTable[]>(hospitalityCausalTableUrl).pipe(tap(table => this.hospitalityCausalTable = table));
    }
    return of(this.hospitalityCausalTable);
  }

  getRetailPFTable(): Observable<RetailPFTable[]> {
    if (this.retailPFTable == null) {
      return this.httpclient.get<RetailPFTable[]>(retailPFTableUrl).pipe(tap(table => this.retailPFTable = table));
    }
    return of(this.retailPFTable);
  }

  getRetaliCausalTable(): Observable<RetaliCausalTable[]> {
    if (this.retaliCausalTable == null) {
      return this.httpclient.get<RetaliCausalTable[]>(retaliCausalTableUrl).pipe(tap(table => this.retaliCausalTable = table));
    }
    return of(this.retaliCausalTable);
  }

  getJobFilterTable(): Observable<JobFilterTable[]> {
    if (this.jobFilterTable == null) {
      return this.httpclient.get<JobFilterTable[]>(jobFilterTableUrl).pipe(tap(table => this.jobFilterTable = table));
    }
    return of(this.jobFilterTable);
  }

  getRegionalForecastTable(): Observable<RegionalForecastTable[]> {
    if (this.regionalForecastTable == null) {
      return this.httpclient.get<RegionalForecastTable[]>(regionalForecastTableUrl).pipe(tap(table => this.regionalForecastTable = table));
    }
    return of(this.regionalForecastTable);
  }
}
