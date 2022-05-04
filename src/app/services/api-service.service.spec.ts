import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiServiceService } from './api-service.service';
import { environment } from 'src/environments/environment';
import { IItemsResponse } from '../interfaces/items';

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let httpTestingController: HttpTestingController

  let mockItems: IItemsResponse = {
    items: [
      {
        "title": "Polaroid 635",
        "description": "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
        "price": "50",
        "email": "cameramail@wallapop.com",
        "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png"
      }
    ]
  }

  let empty: IItemsResponse = {
    items: []
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiServiceService
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return items data', () => {
    service.getItems()
    .subscribe(
      (data) => {
        expect(data).not.toBe(empty);
        expect(JSON.stringify(data)).toEqual(JSON.stringify(mockItems));
      }
    )
    const req = httpTestingController.expectOne(`${environment.itemsUrl}`);
    req.flush(mockItems);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
