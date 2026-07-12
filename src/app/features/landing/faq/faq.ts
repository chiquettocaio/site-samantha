import { isPlatformBrowser } from '@angular/common'
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core'
import { gsap } from 'gsap'
import { Anchor } from '../../../shared/components/anchor/anchor'
import { ButtonVariant } from '../../../shared/components/button/button.model'
import { Icon } from '../../../shared/components/icon/icon'

@Component({
  selector: 'app-faq',
  imports: [Icon, Anchor],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID)

  ButtonVariant = ButtonVariant

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAnimation()
    }
  }

  startAnimation (): void {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#faq-section .faq-section__subtitle',
        start: 'top 85%',
        end: 'top 10%',
        scrub: 3
      }
    })
      .from('#faq-section .faq-section__title', {
        clipPath: 'inset(0 100% 0 0)',
        ease: 'sine.out',
        duration: 100
      })
      .from('#faq-section .faq-section__subtitle', {
        opacity: 0,
        y: -20,
        duration: 25
      })
      .to('#faq-section .faq-section__subtitle .gsap-highlight', {
        backgroundPositionX: '0',
        stagger: 5,
        duration: 50
      })
      .from('#faq-section .faq .faq-item', {
        opacity: 0,
        y: 50,
        stagger: 20,
        duration: 50,
        ease: 'power3.inOut'
      }, '<0.2')

    const cardIcons = '#faq-section .faq .faq-item .faq-item__icon'
    gsap.utils.toArray<HTMLElement>(cardIcons).forEach(icon => {
      timeline.add(
        gsap.timeline()
          .to(icon, {
            y: -10,
            yoyo: true,
            repeat: 1,
            duration: 60
          }),
        '<'
      )
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.needs-more-guidance',
        start: 'top 85%',
        end: 'top 20%',
        scrub: 3
      }
    }).to('.needs-more-guidance .gsap-highlight', {
      backgroundPositionX: '0',
      stagger: 0.2
    })
      .from('.needs-more-guidance app-anchor', {
        y: 100,
        opacity: 0,
        ease: 'back.out(2)'
      })
  }
}
