import { Component } from '@angular/core'
import { Anchor } from '../../../shared/components/anchor/anchor'
import { ButtonVariant } from '../../../shared/components/button/button.model'
import { Icon } from '../../../shared/components/icon/icon'

@Component({
  selector: 'app-faq',
  imports: [Icon, Anchor],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  ButtonVariant = ButtonVariant
}
