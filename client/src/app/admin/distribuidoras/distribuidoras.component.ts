

import { CadastroComponent } from "./cadastro/cadastro.component";

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { DataService } from "../../common/services/data.service";
import { Empresa } from "../../common/models/empresa";

declare var $: any;

@Component({
  selector: 'app-distribuidoras',
  templateUrl: './distribuidoras.component.html',
  styleUrls: ['./distribuidoras.component.css']
})
export class DistribuidorasComponent {
  lastDialogResult: string;

  empresas: Empresa[];


  customClasses = {
    sortAscending: 'fa fa-sort-asc',
    sortDescending: 'fa fa-sort-desc',
    pagerLeftArrow: 'fa fa-chevron-left',
    pagerRightArrow: 'fa fa-chevron-right',
    pagerPrevious: 'fa fa-step-backward',
    pagerNext: 'fa fa-step-forward'
  };

  messages =
  {
    // Message to show when array is presented
    // but contains no values
    emptyMessage: 'Sem dados para mostrar',

    // Footer total message
    totalMessage: 'Total'
  };


  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private dialog: MdDialog, private dataService: DataService) {

  }

  openDialog() {
    let dialogRef = this.dialog.open(CadastroComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  ngOnInit(): void {

    this.dataService.retrieveEmpresas().subscribe(
      result => {
        this.empresas = result;
      });

  }

}
