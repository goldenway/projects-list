import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[plDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elemRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elemRef: ElementRef) {}
}
