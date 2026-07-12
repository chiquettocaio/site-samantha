import { Component, OnInit } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookAppointment } from './features/landing/book-appointment/book-appointment'
import { Footer } from './features/landing/components/footer/footer'
import { Header } from './features/landing/components/header/header'
import { Contact } from './features/landing/contact/contact'
import { Expertise } from './features/landing/expertise/expertise'
import { Faq } from './features/landing/faq/faq'
import { Hero } from './features/landing/hero/hero'

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Expertise,
    BookAppointment,
    Faq,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit (): void {
    this.registerGsapPlugins()
  }

  private registerGsapPlugins (): void {
    gsap.registerPlugin(ScrollTrigger)
  }
}
