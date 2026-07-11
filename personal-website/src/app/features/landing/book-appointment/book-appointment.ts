import { Component } from '@angular/core'
import { Anchor } from '../../../shared/components/anchor/anchor'
import { ButtonVariant } from '../../../shared/components/button/button.model'

@Component({
  selector: 'app-book-appointment',
  imports: [Anchor],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.scss'
})
export class BookAppointment {
  ButtonVariant = ButtonVariant
}
