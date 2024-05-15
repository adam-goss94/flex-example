import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsButtonComponent } from './news-button.component';

describe('NewsButtonComponent', () => {
  let component: NewsButtonComponent;
  let fixture: ComponentFixture<NewsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
