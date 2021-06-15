import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedGamesCarouselComponent } from './featured-games-carousel.component';

describe('FeaturedGamesCarouselComponent', () => {
  let component: FeaturedGamesCarouselComponent;
  let fixture: ComponentFixture<FeaturedGamesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedGamesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedGamesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
