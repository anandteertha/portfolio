import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NventComponent } from './nvent.component';

describe('NventComponent', () => {
  let component: NventComponent;
  let fixture: ComponentFixture<NventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
