import { Component } from '@angular/core'
import { Header } from './features/landing/components/header/header'
import { Expertise } from './features/landing/expertise/expertise'
import { Hero } from './features/landing/hero/hero'

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Expertise],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
