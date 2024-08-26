import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutriderComponent } from './outrider.component';

describe('OutriderComponent', () => {
  let component: OutriderComponent;
  let fixture: ComponentFixture<OutriderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutriderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutriderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
