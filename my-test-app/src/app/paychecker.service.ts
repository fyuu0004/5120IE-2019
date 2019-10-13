import { Injectable } from '@angular/core';
import { TableService, HospitalityPFTable, HospitalityCausalTable, FastFoodCausalTable, RetailPFTable, RetaliCausalTable, FastFoodCausalPFTable } from './table.service'

@Injectable({
  providedIn: 'root'
})
export class PaycheckerService {

  selectedIndustry: string;
  selectedAge: string;
  selectedWorkType: string;
  selectedLevel: string;
  hourlyPayRate: string = "";
  saturday: string = "";
  sunday: string = "";

  fastFoodCausalTable: FastFoodCausalTable[] = [];
  hospitalityPFTable: HospitalityPFTable[] = [];
  retailPFTable: RetailPFTable[] = [];
  retailCausalTable: RetaliCausalTable[] = [];
  fastFoodCausalPFTable: FastFoodCausalPFTable[] = [];
  hospitalityCausalTable: HospitalityCausalTable[] = [];

  constructor(private tableService: TableService) { }

  ngOnInit() {

    this.tableService.getFastFoodCausalPFTable().subscribe(table => this.fastFoodCausalPFTable = table);
    this.tableService.getRetailPFTable().subscribe(table => this.retailPFTable = table);
    this.tableService.getHospitalityPFTable().subscribe(table => this.hospitalityPFTable = table);

  }
}
