import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnadhnamComponent } from './annadhnam.component';

describe('AnnadhnamComponent', () => {
  let component: AnnadhnamComponent;
  let fixture: ComponentFixture<AnnadhnamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnadhnamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnadhnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
