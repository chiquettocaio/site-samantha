import { isPlatformBrowser } from '@angular/common'
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core'
import { gsap } from 'gsap'
import { Icon } from '../../../shared/components/icon/icon'

@Component({
  selector: 'app-contact',
  imports: [Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID)

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAnimation()
    }
  }

  startAnimation (): void {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-section',
        start: 'top 85%',
        end: 'top 20%',
        scrub: 3
      }
    })
      .to('#contact-section .contact-section__identifier', {
        scale: 1.5,
        yoyo: true,
        repeat: 1
      })
      .from('#contact-section .contact-section__title', {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut'
      }, '<')
      .from('#contact-section .contact-section__subtitle', {
        opacity: 0,
        y: -20
      }, '<0.2')
      .to('#contact-section .contact-section__subtitle .gsap-highlight', {
        backgroundPositionX: '0'
      }, '<0.2')
  }
}
