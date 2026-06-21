import { Component, DOCUMENT, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core'

// TODOCH: either remove or use the commented code

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '[class.smaller]': 'smallHeader()'
  }
})
export class Header implements OnInit {
  private readonly document = inject(DOCUMENT)

  popover = viewChild<ElementRef<HTMLElement>>('mobileNavMenu')

  isMenuOpen = signal<boolean>(false)
  activeIndex = signal<number>(1)
  isImperativelyNavigating = signal<boolean>(false)
  smallHeader = signal<boolean>(false)

  ngOnInit (): void {
    this.initIntersectionObserver()
  }

  onPopoverToggle (e: ToggleEvent): void {
    this.isMenuOpen.set(e.newState === 'open')
  }

  closePopover (): void {
    this.popover()?.nativeElement.hidePopover()
  }

  activateLink (index: number, viaIntersectionObserver: boolean = false): void {
    this.activeIndex.set(index)
    this.isImperativelyNavigating.set(!viaIntersectionObserver)
  }

  private initIntersectionObserver (): void {
    const heroSection = this.document.querySelector('#hero-section')
    const expertiseSection = this.document.querySelector('#expertise-section')
    const faqSection = this.document.querySelector('#faq-section')
    const contactSection = this.document.querySelector('#contact-section')

    const scrollSentinel = this.document.querySelector('.scroll-sentinel')

    const mapping: Record<string, number> = {
      'hero-section': 1,
      'expertise-section': 2,
      'faq-section': 3,
      'contact-section': 4
    }

    const observerCallback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const targetIndex = mapping[target.id]

          if (!this.isImperativelyNavigating()) {
            this.activateLink(targetIndex, true)
          }

          this.isImperativelyNavigating.set(targetIndex !== this.activeIndex())
        }
      })
    }

    const scrollSentinelCallback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        this.smallHeader.set(!entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(observerCallback, { rootMargin: '-50%' })
    const observer2 = new IntersectionObserver(scrollSentinelCallback, { rootMargin: '-10%' })

    if (heroSection) observer.observe(heroSection)
    if (expertiseSection) observer.observe(expertiseSection)
    if (faqSection) observer.observe(faqSection)
    if (contactSection) observer.observe(contactSection)

    if (scrollSentinel) observer2.observe(scrollSentinel)
  }
}
