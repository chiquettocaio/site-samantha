import { isPlatformBrowser } from '@angular/common'
import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core'
import { gsap } from 'gsap'
import { Anchor } from '../../../shared/components/anchor/anchor'
import { ButtonVariant } from '../../../shared/components/button/button.model'
import { Icon } from '../../../shared/components/icon/icon'

@Component({
  selector: 'app-expertise',
  imports: [Anchor, Icon],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss'
})
export class Expertise implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID)

  ButtonVariant = ButtonVariant

  ngAfterViewInit (): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAnimation()
    }
  }

  private startAnimation (): void {
    this.animateProtectionSection()
    this.animateServicesSection()
  }

  private animateProtectionSection (): void {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#expertise-section',
        start: 'top 70%',
        end: 'top 20%'
      }
    })
      .to('#expertise-section .expertise-subsection--protection .expertise-subsection__identifier', {
        scale: 1.5,
        yoyo: true,
        repeat: 1
      })
      .from('#expertise-section .expertise-subsection--protection .expertise-subsection__title', {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut'
      }, '<')
      .from('#expertise-section .expertise-subsection--protection .expertise-subsection__subtitle', {
        opacity: 0,
        y: -20
      }, '<0.2')
      .from('#expertise-section .expertise-subsection--protection .expertise-subsection-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2
      }, '<0.2')

    const cardIcons = '#expertise-section .expertise-subsection--protection .expertise-subsection-card .expertise-subsection-card__image'
    gsap.utils.toArray<HTMLElement>(cardIcons).forEach(icon => {
      timeline.add(
        gsap.timeline()
          .to(icon, {
            y: -10,
            yoyo: true,
            repeat: 1,
            duration: 0.2
          }),
        '-=0.2'
      )
    })

    timeline.add(
      gsap.from('#expertise-section .expertise-subsection--protection app-anchor', {
        opacity: 0,
        y: 25,
        ease: 'power1.inOut'
      }),
      '-=1.1'
    )
  }

  private animateServicesSection (): void {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.expertise-subsection--services',
        start: 'top 70%',
        end: 'top 20%'
      }
    })
      .to('#expertise-section .expertise-subsection--services .expertise-subsection__identifier', {
        scale: 1.5,
        yoyo: true,
        repeat: 1
      })
      .from('#expertise-section .expertise-subsection--services .expertise-subsection__title', {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut'
      }, '<')
      .from('#expertise-section .expertise-subsection--services .expertise-subsection__subtitle', {
        opacity: 0,
        y: -20
      }, '<0.2')
      .to('#expertise-section .expertise-subsection--services .expertise-subsection__subtitle .gsap-decorate', {
        backgroundPositionX: '0',
        stagger: 0.1
      })

    gsap.timeline({
      scrollTrigger: {
        trigger: '#expertise-section .expertise-subsection--services .expertise-subsection-cards',
        start: 'top 70%',
        end: 'top 20%',
        markers: true
      }
    }).from('#expertise-section .expertise-subsection--services .expertise-subsection-card', {
      opacity: 0,
      x: (index, target, array) => {
        const fromLeft = index % 2 === 0
        return fromLeft ? -50 : 50
      },
      stagger: 0.2
    })

    const cardTitles = '#expertise-section .expertise-subsection--services .expertise-subsection-card .expertise-subsection-card__title'
    gsap.utils.toArray<HTMLElement>(cardTitles).forEach((title, i) => {
      timeline.add(
        gsap.timeline()
          .to(title, {
            scale: 1.1,
            yoyo: true,
            repeat: 1,
            duration: 0.2
          }),
        '-=0.1'
      )
    })
  }
}
