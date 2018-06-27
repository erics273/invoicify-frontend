import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'
import { fadeInAnimation } from '../animations/fade-in.animation';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dev-tools',
  templateUrl: './dev-tools.component.html',
  styleUrls: ['./dev-tools.component.css']
})
export class DevToolsComponent implements OnInit {

  companies: any[];
  invoices: any[];
  billingRecords: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
  }

 
  deleteAllBillingRecords(){

  }

  deleteAllInvoices(){

  }

}
