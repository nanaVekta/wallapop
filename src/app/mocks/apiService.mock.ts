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

export const mockItems: IItem[] = [
  {
    "title": "iPhone 6S Oro",
    "description": "Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.",
    "price": "740",
    "email": "iphonemail@wallapop.com",
    "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png"
  },
  {
    "title": "Polaroid 635",
    "description": "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
    "price": "50",
    "email": "cameramail@wallapop.com",
    "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png"
  },
  {
    "title": "Bolso piel marca Hoss",
    "description": "Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.",
    "price": "250",
    "email": "bagmail@wallapop.com",
    "image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/bag.png"
  }
]

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
