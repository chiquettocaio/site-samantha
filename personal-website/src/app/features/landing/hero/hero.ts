import { Component } from '@angular/core'
import { Button } from '../../../shared/components/button/button'
import { ButtonVariant } from '../../../shared/components/button/button.model'

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  ButtonVariant = ButtonVariant
}
