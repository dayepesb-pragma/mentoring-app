import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsAdminComponent } from './statics-admin.component';

describe('StaticsAdminComponent', () => {
  let component: StaticsAdminComponent;
  let fixture: ComponentFixture<StaticsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
