import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NavbarComponent } from './navbar.component';
import { mockItem } from '../../mocks/apiService.mock';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        ModalModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    spyOn(component, 'openModal').and.callThrough();
    let button = fixture.debugElement.query(By.css('.btn-primary'));
    button.triggerEventHandler('click', null)
    expect(component.openModal).toHaveBeenCalled();
  });

  it('should remove item from favorites', () => {
    component.favoriteItems = [mockItem];
    component.removeFromFav(mockItem);
    expect(component.favoriteItems.length).toBe(0);
  })
});
