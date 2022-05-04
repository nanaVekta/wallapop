import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { mockItem } from '../../mocks/apiService.mock';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set page number', () => {
    component.items = [mockItem];
    component.pageSize = 5;
    component.maxPages = 5;
    component.setPage(1);
    expect(component.pager.totalItems).toBe(1);
    expect(component.pager.currentPage).toBe(1);
    expect(component.pager.totalPages).toBe(1);
  })
});
