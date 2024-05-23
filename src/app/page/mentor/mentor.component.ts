import { Component, inject } from '@angular/core';
import { SpaPropsService } from '../../services/spa-props.service';

@Component({
  selector: 'test-app-mentor',
  standalone: true,
  imports: [],
  templateUrl: './mentor.component.html',
  styleUrl: './mentor.component.scss'
})
export class MentorComponent {
  private _spaPropsService = inject(SpaPropsService);

  

}
