import { Component, EventEmitter, Output } from "@angular/core";

@Component({
   selector:'app-header',
   templateUrl:'./header.component.html',
   styleUrls:[]
})
export class HeaderComponent{
   collapsed = true;
   @Output() loadedFeature=new EventEmitter<string>();
   clicked(feature:string){
     this.loadedFeature.emit(feature);
   }
}