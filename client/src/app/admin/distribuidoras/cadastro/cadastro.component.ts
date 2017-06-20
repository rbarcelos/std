
import { Component, Optional, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar, MD_DIALOG_DATA } from '@angular/material';

declare var $: any;

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(
    @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
    private dialogRef: MdDialogRef<CadastroComponent>) { }

  get IsEdit(): boolean {
    return this.dialogData != null;
  }

}