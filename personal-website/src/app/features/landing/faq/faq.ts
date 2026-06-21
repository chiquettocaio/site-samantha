import { Component } from '@angular/core'
import { Button } from '../../../shared/components/button/button'
import { ButtonVariant } from '../../../shared/components/button/button.model'
import { Icon } from '../../../shared/components/icon/icon'

@Component({
  selector: 'app-faq',
  imports: [Icon, Button],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  ButtonVariant = ButtonVariant
}
