import { NgOptimizedImage } from '@angular/common'
import { Component, DOCUMENT, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core'

// TODOCH: either remove or use the commented code

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  private readonly document = inject(DOCUMENT)

  popover = viewChild<ElementRef<HTMLElement>>('mobileNavMenu')

  isMenuOpen = signal<boolean>(false)
  indicatorCoords = signal<{ x: number, w: number }>({ x: 0, w: 71 })
  activeLinkCoords = signal<{ x: number, w: number }>({ x: 0, w: 0 })
  activeIndex = signal<number>(1)

  ngOnInit (): void {
    this.initIntersectionObserver()
  }

  // ngAfterViewInit (): void {
  //   this.captureHomeLinkCoords()
  // }

  onPopoverToggle (e: ToggleEvent): void {
    this.isMenuOpen.set(e.newState === 'open')
  }

  closePopover (): void {
    this.popover()?.nativeElement.hidePopover()
  }

  // onLinkHover (e: MouseEvent): void {
  //   const target = e.target as HTMLElement

  //   this.indicatorCoords.set({
  //     x: Math.round(target.offsetLeft),
  //     w: Math.round(target.offsetWidth)
  //   })
  // }

  // onNavBlur (): void {
  //   this.indicatorCoords.set(this.activeLinkCoords())
  // }

  onLinkClick (e: MouseEvent): void {
    const target = e.target as HTMLElement
    const targetIndex = parseInt(target.dataset['index'] ?? '1')

    // this.activeLinkCoords.set({
    //   x: Math.round(target.offsetLeft),
    //   w: Math.round(target.offsetWidth)
    // })

    this.activeIndex.set(targetIndex)
  }

  // private captureHomeLinkCoords (): void {
  //   const homeLink = this.document.querySelector('.nav-menu__link--active') as HTMLElement

  //   this.activeLinkCoords.set({
  //     x: Math.round(homeLink?.offsetLeft),
  //     w: Math.round(homeLink?.offsetWidth)
  //   })

  //   this.indicatorCoords.set(this.activeLinkCoords())
  // }

  private initIntersectionObserver (): void {
    // TODOCH: implement once sections are created
  }
}
