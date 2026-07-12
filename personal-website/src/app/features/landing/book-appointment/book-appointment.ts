import { AfterViewInit, Component } from '@angular/core'
import { gsap } from 'gsap'
import { Anchor } from '../../../shared/components/anchor/anchor'
import { ButtonVariant } from '../../../shared/components/button/button.model'

@Component({
  selector: 'app-book-appointment',
  imports: [Anchor],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.scss'
})
export class BookAppointment implements AfterViewInit {
  ButtonVariant = ButtonVariant

  ngAfterViewInit (): void {
    this.startAnimation()
  }

  startAnimation (): void {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#book-appointment-section',
        start: 'top 70%',
        end: 'top 20%'
      }
    })
      .from('#book-appointment-section', {
        opacity: 0,
        scale: 0.5
      })
      .to('#book-appointment-section app-anchor', {
        scale: 1.1,
        yoyo: true,
        repeat: 3,
        duration: 0.4,
        ease: 'power1.inOut'
      }, '<0.2')
  }
}
