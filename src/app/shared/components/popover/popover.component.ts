import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "@shared/shared.module";

@Component({
    selector: 'app-popover',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: 'popover.component.html',
    styleUrls: ['popover.component.scss'],
})
export class PopoverComponent {
    @Output() public isOpen = new EventEmitter<boolean>();
    @ViewChild('popoverRef') popoverEl: ElementRef<HTMLElement> | undefined;

    public isVisiblePopup = false;
    public popupPosition: { left: string } | { right: string } = { right: '0' };
    public minWidth = 256;

    handleClick(): void {
        this.isVisiblePopup = true;
        this.popupPosition = this.popoverEl?.nativeElement.offsetLeft || 0 > this.minWidth ? { right: '0' } : { left: '0' };
        this.isOpen.emit(true);
    }

    handleClickOutside(): void {
        this.isVisiblePopup = false;
        this.isOpen.emit(false);
    }
}
