import { Directive, ElementRef, inject, Input, OnChanges, OnDestroy, NgZone } from "@angular/core";
import { createElement, ElementType } from "react";
import { createRoot, Root } from "react-dom/client";

@Directive({
    selector: "[reactComponent]",
    standalone: true,
})
export class ReactComponentDirective<Comp extends ElementType> implements OnChanges, OnDestroy {
    @Input() reactComponent!: Comp;
    @Input() props: { [key: string]: any; } | undefined
    private root: Root;
    private ngZone: NgZone;

    constructor() {
        this.ngZone = inject(NgZone)
        const elementRef = inject(ElementRef);
        this.root = createRoot(elementRef.nativeElement);
    }

    ngOnChanges() {
        this.ngZone.runOutsideAngular(() => {
            if (this.reactComponent) {
                this.root.render(createElement(this.reactComponent, this.props));
            }
        });
    }

    ngOnDestroy() {
        this.ngZone.runOutsideAngular(() => {
            this.root.unmount();
        });
    }
}
