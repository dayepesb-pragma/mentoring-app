import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TabsComponent } from '../../common/tabs/tabs.component';
import { SpaPropsService } from '../../services/spa-props.service';

@Component({
  selector: 'test-app-admin',
  standalone: true,
  imports: [TabsComponent, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  private _spaPropsService = inject(SpaPropsService);
  private _router = inject(Router);

  tabs: any[] = [];

  ngOnInit() {
    this.tabs = [
      {
        label: 'Cahpters',
        click: () => {
          this._router.navigate(['/dashboard/admin/chapters']);
        }
      },
      {
        label: 'Listas',
        click: () => {
          this._router.navigate(['/dashboard/admin/list']);
        }
      },
      {
        label: 'Estadisticas',
        click: () => {
          this._router.navigate(['/dashboard/admin/statics']);
        }
      }
    ];
  }
}
