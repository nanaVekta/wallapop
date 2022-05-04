import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './home.component';
import { ApiServiceService } from '../../services/api-service.service';
import { apiServiceStub, mockItem } from '../../mocks/apiService.mock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        {provide: ApiServiceService, useValue: apiServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return items', () => {
    expect(component.items.length).toBeGreaterThan(0);
  });

  it('should add item to favorite', () => {
    component.addToFavorite(mockItem);
    expect(component.favoriteItems.length).toBeGreaterThan(0);
  });

  it('should return an item if search term is found', () => {
    let term = {
      target: {
        value: "Polaroid"
      }
    }

    component.searchItem(term);
    expect(component.items.length).toBeGreaterThan(0);
  });

  it('should not return an item if search term is not found', () => {
    let term = {
      target: {
        value: "jkdjd"
      }
    }

    component.searchItem(term);
    expect(component.items.length).toBeLessThanOrEqual(0);
  });
});
