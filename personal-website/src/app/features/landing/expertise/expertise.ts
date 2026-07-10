import { Component } from '@angular/core'
import { Button } from '../../../shared/components/button/button'
import { ButtonVariant } from '../../../shared/components/button/button.model'

@Component({
  selector: 'app-expertise',
  imports: [Button],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss'
})
export class Expertise {
  ButtonVariant = ButtonVariant
}
