
import { Component, OnInit } from '@angular/core';
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
  dtOptions: any;

  rows = [];

  temp = [];

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


  columns = [
    { prop: 'name' }
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;


  constructor(private dialog: MdDialog, private dataService: DataService) {
 //this.dat((data) => {
 //     this.selected = [data[2]];
   //   this.rows = data;
    //});
  }

  openDialog() {
    let dialogRef = this.dialog.open(CadastroComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

   rows = [];

  selected = [];

  columns: any[] = [
    { prop: 'name'} , 
    { name: 'Company' }, 
    { name: 'Gender' }
  ];


  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  updateRowPosition() {
    const ix = this.getSelectedIx();
    const arr = [ ...this.rows ];
    arr[ix - 1] = this.rows[ix];
    arr[ix] = this.rows[ix - 1];
    this.rows = arr;
  }

  getSelectedIx() {
    return this.selected[0]['$$index'];
  }

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ]
    };

    this.dataService.retrieveEmpresas().subscribe(
      result => {
        this.empresas = result;
      });

    // this.dtOptions = {
    //   ajax: '../../../assets/data/empresas.json',
    //   columns: [{
    //     title: 'Name',
    //     data: 'name'
    //   }],
    //   rowCallback: (row: Node, data: any[] | Object, index: number) => {
    //     const self = this;
    //     // Unbind first in order to avoid any duplicate handler
    //     // (see https://github.com/l-lin/angular-datatables/issues/87)
    //     $('td', row).unbind('click');
    //     $('td', row).bind('click', () => {
    //       self.someClickHandler(data);
    //     });
    //     return row;
    //   }
    // };

  }

}
