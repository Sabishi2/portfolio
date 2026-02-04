import { NgModule } from "@angular/core";
import { CarouselModule } from "ngx-owl-carousel-o";
import { PICarouselHolderComponent } from "./pi-carousel-holder-component";
import { ProjectIcon } from "../project-icon";

@NgModule({
    imports: [CarouselModule, ProjectIcon],
    declarations: [PICarouselHolderComponent],
    exports: [PICarouselHolderComponent]
})
export class PICarouselHolderModule { }