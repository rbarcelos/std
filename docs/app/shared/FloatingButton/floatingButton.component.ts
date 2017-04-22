import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'floating-cmp',
    templateUrl: 'floatingButton.component.html',
    styleUrls:['../../../assets/css/fab.css']
})

export class FloatingButtonComponent implements OnInit{

    ngOnInit(){
    }
    
    onClick() {
        $('.fabGrid').toggleClass('fabX');
    }
}
