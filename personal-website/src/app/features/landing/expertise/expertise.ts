import { Component } from '@angular/core'
import { Button } from '../../../shared/components/button/button'
import { ButtonVariant } from '../../../shared/components/button/button.model'
import { Icon } from '../../../shared/components/icon/icon'

@Component({
  selector: 'app-expertise',
  imports: [Button, Icon],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss'
})
export class Expertise {
  ButtonVariant = ButtonVariant
}
