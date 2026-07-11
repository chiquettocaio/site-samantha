import { Component } from '@angular/core'
import { Anchor } from '../../../shared/components/anchor/anchor'
import { ButtonVariant } from '../../../shared/components/button/button.model'
import { Icon } from '../../../shared/components/icon/icon'

@Component({
  selector: 'app-expertise',
  imports: [Anchor, Icon],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss'
})
export class Expertise {
  ButtonVariant = ButtonVariant
}
