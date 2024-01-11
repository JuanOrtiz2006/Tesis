import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavegacionPage } from './navegacion.page';

describe('NavegacionPage', () => {
  let component: NavegacionPage;
  let fixture: ComponentFixture<NavegacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NavegacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
