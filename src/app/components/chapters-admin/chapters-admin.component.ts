import { Component, OnInit, inject } from '@angular/core';
import { SpaPropsService } from '../../services/spa-props.service';

@Component({
  selector: 'test-app-chapters-admin',
  standalone: true,
  imports: [],
  templateUrl: './chapters-admin.component.html',
  styleUrl: './chapters-admin.component.scss'
})
export class ChaptersAdminComponent implements OnInit {

  private _spaPropsService = inject(SpaPropsService);

  lists: any[] = [];
  chapters: any[] = [];

  async ngOnInit() {
    console.log('ChaptersAdminComponent');
    this._spaPropsService.loadingService.show();
    console.log('loadingService.show()');
    const lists = await this._spaPropsService.listService.getLists('list', 'general')
    console.log(lists);
    this._spaPropsService.loadingService.hide();
    console.log(lists);

  }
}
