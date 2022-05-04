import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SortDirective } from './sort.directive';
import { mockItems } from '../mocks/apiService.mock';

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
  pageItems: Array<any> = mockItems;

}

describe('SortDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: any;
  let elOrder: any;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ SortDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding


  // all elements with an attached sort directive
   des = fixture.debugElement.queryAll(By.directive(SortDirective));

   // all elements with data-order
    elOrder = fixture.debugElement.queryAll(By.css('[data-order]'));

  });

  it('should have four sort elements', () => {
    expect(des.length).toBe(4);
  });

  it('should have four data-order elements', () => {
    expect(elOrder.length).toBe(4);
  })

  it('should sort by title in desc', () => {
    des[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(2)')).nativeElement.innerHTML).toBe('Polaroid 635');
  });

  it('should sort by title in asc', () => {
    elOrder[0].nativeElement.setAttribute('data-order', 'asc');
    des[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(2)')).nativeElement.innerHTML).toBe('Bolso piel marca Hoss');
  });

  it('should sort by description', () => {
    des[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(3)')).nativeElement.innerHTML).toBe('Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.');
  });

  it('should sort by description in asc', () => {
    elOrder[1].nativeElement.setAttribute('data-order', 'asc');
    des[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(3)')).nativeElement.innerHTML).toBe('Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.');
  });

  it('should sort by price', () => {
    des[2].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(4)')).nativeElement.innerHTML).toBe('740');
  });

  it('should sort by price in asc', () => {
    elOrder[2].nativeElement.setAttribute('data-order', 'asc');
    des[2].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(4)')).nativeElement.innerHTML).toBe('50');
  });

  it('should sort by email', () => {
    des[3].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(5)')).nativeElement.innerHTML).toBe('iphonemail@wallapop.com');
  });

  it('should sort by email in asc', () => {
    elOrder[3].nativeElement.setAttribute('data-order', 'asc');
    des[3].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('td:nth-child(5)')).nativeElement.innerHTML).toBe('bagmail@wallapop.com');
  })
});
