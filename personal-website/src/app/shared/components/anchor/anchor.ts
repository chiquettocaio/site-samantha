import { Component, input, output } from '@angular/core'
import { AnchorTarget, AnchorVariant } from './anchor.model'

@Component({
  selector: 'app-anchor',
  imports: [],
  templateUrl: './anchor.html',
  styleUrl: './anchor.scss'
})
export class Anchor {
  readonly anchorVariant = AnchorVariant

  href = input.required<string>()
  label = input.required<string>()
  ariaLabel = input.required<string>()
  title = input.required<string>()
  variant = input<AnchorVariant>(AnchorVariant.PRIMARY)
  target = input<AnchorTarget>('_self')

  clicked = output()
}
