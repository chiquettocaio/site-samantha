import { Component } from '@angular/core'
import { Button } from '../../../shared/components/button/button'
import { ButtonVariant } from '../../../shared/components/button/button.model'

@Component({
  selector: 'app-book-appointment',
  imports: [Button],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.scss'
})
export class BookAppointment {
  ButtonVariant = ButtonVariant
}
