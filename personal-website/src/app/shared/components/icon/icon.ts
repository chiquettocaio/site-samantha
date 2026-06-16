import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
  phosphorCaretRight
} from '@ng-icons/phosphor-icons/regular'

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  providers: [
    provideIcons({
      phosphorCaretRight
    })
  ],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  name = input.required<string>()
  ariaLabel = input.required<string>()
}
