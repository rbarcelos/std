import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'floating-cmp',
//    template:'<div style="position:fixed; left:200px;z-index:100" (click)="onClick()">    <button>Click</button>    </div>'
    templateUrl: 'floatingButton.component.html',
    styleUrls:['../../../assets/css/typography.css','../../../assets/css/google-icons.css','../../../assets/css/button.css','../../../assets/css/floating-action-button.css']
})

export class FloatingButtonComponent implements OnInit{

    ngOnInit(){
    }
    
    onClick() {
        alert('Click');
    }
}
