import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwaysurfersComponent } from './subwaysurfers.component';

describe('SubwaysurfersComponent', () => {
  let component: SubwaysurfersComponent;
  let fixture: ComponentFixture<SubwaysurfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubwaysurfersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwaysurfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
