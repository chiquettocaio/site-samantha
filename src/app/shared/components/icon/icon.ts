import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
  phosphorCaretRight,
  phosphorCheckSquareOffset,
  phosphorEnvelopeSimple,
  phosphorHeadset,
  phosphorPhone
} from '@ng-icons/phosphor-icons/regular'

import {
  customCalendarMonth,
  customCheckedBag,
  customFemale,
  customHourGlass,
  customRedo,
  customSentimentCalm,
  customWhatsappIcon
} from './custom-icons'

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  providers: [
    provideIcons({
      phosphorCaretRight,
      phosphorEnvelopeSimple,
      phosphorPhone,
      phosphorHeadset,
      phosphorCheckSquareOffset,

      customCalendarMonth,
      customCheckedBag,
      customFemale,
      customHourGlass,
      customRedo,
      customSentimentCalm,
      customWhatsappIcon
    })
  ],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  name = input.required<string>()
  ariaLabel = input.required<string>()
}
