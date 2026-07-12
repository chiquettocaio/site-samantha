import { isPlatformBrowser } from '@angular/common'
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core'
import { gsap } from 'gsap'
import { Anchor } from '../../../shared/components/anchor/anchor'
import { ButtonVariant } from '../../../shared/components/button/button.model'

@Component({
  selector: 'app-hero',
  imports: [Anchor],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID)

  ButtonVariant = ButtonVariant

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAnimation()
    }
  }

  private startAnimation (): void {
    gsap.timeline()
      .from('#hero-section .hero-section__title', {
        opacity: 0,
        y: -200,
        ease: 'power1.inOut',
        duration: 0.5
      })
      .from('#hero-section .hero-section__paragraph', {
        opacity: 0,
        ease: 'power1.inOut',
        stagger: 0.3
      })
      .from('#hero-section app-anchor', {
        opacity: 0,
        y: 25,
        ease: 'power1.inOut'
      })
  }
}
