import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-owl-carousel-o";
import { PPCarouselHolderComponent } from "./pp-carousel-holder-component";
@NgModule({
    imports: [CarouselModule],
    declarations: [PPCarouselHolderComponent],
    exports: [PPCarouselHolderComponent]
})
export class PPCarouselHolderModule { }