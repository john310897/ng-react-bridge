import { Directive, ElementRef, Input, OnChanges, OnDestroy, NgZone, runInInjectionContext, Injector } from "@angular/core";
import { createElement, ElementType } from "react";
import { createRoot, Root } from "react-dom/client";

@Directive({
    selector: "[reactComponent]",
    standalone: true,
})
export class ReactComponentDirective<Comp extends ElementType> implements OnChanges, OnDestroy {
    @Input() reactComponent!: Comp;
    @Input() props: { [key: string]: any; } | undefined

    private root!: Root;

    constructor(private elementRef: ElementRef, private ngZone: NgZone, private injector: Injector) {
        runInInjectionContext(this.injector, () => {
            this.root = createRoot(this.elementRef.nativeElement)
        })
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
