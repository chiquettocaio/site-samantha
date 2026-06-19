import { Component } from '@angular/core'
import { BookAppointment } from './features/landing/book-appointment/book-appointment'
import { Header } from './features/landing/components/header/header'
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
    Faq
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
