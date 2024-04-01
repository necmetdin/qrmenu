import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scrolltotop',
  templateUrl: './scrollToTop.component.html',
  styleUrls: ['./scrollToTop.component.scss'],
  
})

export class ScrollToTopComponent implements AfterViewInit {

  @HostBinding('className') className = 'showrocket';

  @HostListener('window:scroll', ['$event.target.scrollingElement.scrollTop'])
  onWindowScroll(scrollTop: number) {
    if (scrollTop < 50) {
      this.renderer.addClass(this.el.nativeElement, 'hide');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'hide');
    }
  }

  @HostListener('click')
  onClick() {
    this.renderer.addClass(this.el.nativeElement, 'launchrocket');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'launchrocket');
    }, 600);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.onWindowScroll(0);
  }
}