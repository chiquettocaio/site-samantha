import { Component } from '@angular/core'
import { Header } from './features/landing/components/header/header'
import { Hero } from './features/landing/hero/hero'

@Component({
  selector: 'app-root',
  imports: [Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
