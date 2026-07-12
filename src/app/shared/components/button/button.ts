import { Component, input, output } from '@angular/core'
import { ButtonVariant } from './button.model'

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  readonly buttonVariant = ButtonVariant

  type = input<string>('submit')
  label = input.required<string>()
  ariaLabel = input.required<string>()
  title = input.required<string>()
  variant = input<ButtonVariant>(ButtonVariant.PRIMARY)

  clicked = output()
}
