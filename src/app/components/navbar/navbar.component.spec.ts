import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NavbarComponent } from './navbar.component';
import { mockItem } from '../../mocks/apiService.mock';
import { ToastrService } from 'ngx-toastr';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let toastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {
    toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', ['error', 'success']);
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        ModalModule.forRoot()
      ],
      providers: [
        { provide: ToastrService, useValue: toastrService }
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
    expect(toastrService.success).toHaveBeenCalledWith('Item has been removed from your favorites');
    expect(component.favoriteItems.length).toBe(0);
  });

  it('should not remove item from favorites if item is not found', () => {
    component.favoriteItems = [mockItem];
    let item = {
      "title": "Bolso piel marca Hoss",
      "description": "Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.",
      "price": "250",
      "email": "bagmail@wallapop.com",
      "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/bag.png"
    }
    component.removeFromFav(item);
    expect(toastrService.error).toHaveBeenCalledWith('Fatal error');
    expect(component.favoriteItems.length).toBe(1);
  });

  it('should not remove an item if favorites is empty', () => {
    component.favoriteItems = [];
    component.removeFromFav(mockItem);
    expect(toastrService.error).toHaveBeenCalledWith('Fatal error');
    expect(component.favoriteItems.length).toBe(0);
  });
});
