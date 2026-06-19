import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
  phosphorCaretRight
} from '@ng-icons/phosphor-icons/regular'

import {
  customCalendarMonth,
  customCheckedBag,
  customFemale,
  customHourGlass,
  customRedo,
  customSentimentCalm
} from './custom-icons'

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  providers: [
    provideIcons({
      phosphorCaretRight,

      customCalendarMonth,
      customCheckedBag,
      customFemale,
      customHourGlass,
      customRedo,
      customSentimentCalm
    })
  ],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  name = input.required<string>()
  ariaLabel = input.required<string>()
}
