import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersAdminComponent } from './chapters-admin.component';

describe('ChaptersAdminComponent', () => {
  let component: ChaptersAdminComponent;
  let fixture: ComponentFixture<ChaptersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaptersAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaptersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
