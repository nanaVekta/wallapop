import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SortDirective } from './sort.directive';

@Component({
  template: `
      <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col" [appSort]="pageItems" data-order="desc" data-name="title">Title</th>
              <th scope="col" [appSort]="pageItems" data-order="desc" data-name="description">Description</th>
              <th scope="col" [appSort]="pageItems" data-order="desc" data-name="price">Price</th>
              <th scope="col" [appSort]="pageItems" data-order="desc" data-name="email">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of pageItems">
              <td>
                <img [src]="item.image" class="img-fluid img-thumbnail" width="200" [alt]="item.title">
              </td>
              <td>{{item.title}}</td>
              <td>{{item.description}}</td>
              <td>{{item.price}}</td>
              <td>{{item.email}}</td>
            </tr>
          </tbody>
        </table>
  `
})
class TestComponent {
  pageItems: Array<any> = [
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
  ];

}

describe('SortDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: any;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ SortDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding


  // all elements with an attached sort directive
   des = fixture.debugElement.queryAll(By.directive(SortDirective));
  });

  it('should have four sort elements', () => {
    expect(des.length).toBe(4);
  });

  it('should sort by title', () => {
    des[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(2)')).nativeElement.innerHTML).toBe('Polaroid 635');
  });

  it('should sort by description', () => {
    des[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(3)')).nativeElement.innerHTML).toBe('Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.');
  });

  it('should sort by price', () => {
    des[2].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(4)')).nativeElement.innerHTML).toBe('740');
  });

  it('should sort by email', () => {
    des[3].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(5)')).nativeElement.innerHTML).toBe('iphonemail@wallapop.com');
  })
});
