import { Component, OnInit } from '@angular/core';
import { CadastroComponent } from "./cadastro/cadastro.component";

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-distribuidoras',
  templateUrl: './distribuidoras.component.html',
  styleUrls: ['./distribuidoras.component.css']
})
export class DistribuidorasComponent {
  lastDialogResult: string;

  constructor(private dialog: MdDialog, private dataService: DataService) {
//  this.dat((data) => {
//       this.selected = [data[2]];
//       this.rows = data;
//     });
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

}
