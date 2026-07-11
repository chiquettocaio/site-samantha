import { Component } from '@angular/core'
import { Anchor } from '../../../shared/components/anchor/anchor'
import { ButtonVariant } from '../../../shared/components/button/button.model'

@Component({
  selector: 'app-hero',
  imports: [Anchor],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  ButtonVariant = ButtonVariant
}
