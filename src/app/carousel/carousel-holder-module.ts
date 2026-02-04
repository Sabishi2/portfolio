import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-owl-carousel-o";
import { CarouselHolderComponent } from "./carousel-holder-component";
@NgModule({
    imports: [CarouselModule],
    declarations: [CarouselHolderComponent],
    exports: [CarouselHolderComponent]
})
export class CarouselHolderModule { }