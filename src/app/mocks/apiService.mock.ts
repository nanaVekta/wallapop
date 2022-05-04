import { of } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import { IItem } from '../interfaces/items';
export let apiServiceStub: Partial<ApiServiceService>;

export const mockItem: IItem =
{
  "title": "Polaroid 635",
  "description": "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
  "price": "50",
  "email": "cameramail@wallapop.com",
  "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png"
}

apiServiceStub = {
  getItems() {
    return of({
      items: [
        {
          "title": "Polaroid 635",
          "description": "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
          "price": "50",
          "email": "cameramail@wallapop.com",
          "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png"
        }
      ]
    });
  }
};
