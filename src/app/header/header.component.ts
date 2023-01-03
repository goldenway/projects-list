import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pl-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;
    @Output() menuIndexChange: EventEmitter<number> = new EventEmitter<number>();

    onMenuIndexSelect(index: number) {
        this.menuIndexChange.emit(index);
    }
}
