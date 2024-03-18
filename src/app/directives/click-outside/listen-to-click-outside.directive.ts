import { Directive, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from "@angular/core";

@Directive({
    selector: '[listenToOutsideClick]',
})
export class ListenToClickOutsideDirective implements OnInit {
    @Output() public lsOnClickOutside = new EventEmitter<Event>();

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) {
    }

    public ngOnInit(): void {
        this.renderer.listen(document, "click", (event: Event) => {
            this.handleClick(event);
        });
    }

    private handleClick(event: Event): void {
        const clickedInside = this.elementRef.nativeElement.contains(event.target);
        if (!clickedInside) {
            this.lsOnClickOutside.emit(event);
        }
    }
}
