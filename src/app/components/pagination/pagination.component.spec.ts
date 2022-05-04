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

  it('should detect change', () => {
    component.items = [mockItem];
    component.ngOnChanges({items: {currentValue: [mockItem], isFirstChange: ()=> { return false}, firstChange: false, previousValue: [mockItem]}});
    expect(component.pager.totalItems).toBe(1);
  })

  it('should set page number', () => {
    component.items = [mockItem];
    component.pageSize = 5;
    component.maxPages = 5;
    component.setPage(1);
    expect(component.pager.totalItems).toBe(1);
    expect(component.pager.currentPage).toBe(1);
    expect(component.pager.totalPages).toBe(1);
  });

  it('should not set page number if no items are found', () => {
    component.items = [];
    expect(component.pager).toEqual({});
  });

  it('should set page number if currentPage is less than 1', () => {
    component.items = [mockItem];
    component.pageSize = 5;
    component.maxPages = 5;
    component.setPage(0);
    expect(component.pager.totalItems).toBe(1);
    expect(component.pager.currentPage).toBe(1);
    expect(component.pager.totalPages).toBe(1);
  });

  it('should set page number if currentPage is greater than total pages', () => {
    component.items = [mockItem];
    component.pageSize = 1;
    component.maxPages = 1;
    component.setPage(2);
    expect(component.pager.totalItems).toBe(1);
    expect(component.pager.currentPage).toBe(1);
    expect(component.pager.totalPages).toBe(1);
  });

  it('should set page number if maxPages is less than total pages', () => {
    component.items = [mockItem, mockItem, mockItem, mockItem];
    component.pageSize = 2;
    component.maxPages = 2;
    component.setPage(2);
    expect(component.pager.totalItems).toBe(4);
    expect(component.pager.currentPage).toBe(2);
    expect(component.pager.totalPages).toBe(2);
  });

  it('should set page number if maxPages is less than total pages and current page equal to maxPagesBeforeCurrentPage', () => {
    component.items = [mockItem, mockItem, mockItem, mockItem];
    component.pageSize = 2;
    component.maxPages = 1;
    component.setPage(1);
    expect(component.pager.totalItems).toBe(4);
    expect(component.pager.currentPage).toBe(1);
    expect(component.pager.totalPages).toBe(2);
  });

  it('should set page number if maxPages is less than total pages and current page + maxPagesAfterCurrentPage is greater than totalPages', () => {
    component.items = [mockItem, mockItem, mockItem, mockItem, mockItem, mockItem];
    component.pageSize = 1;
    component.maxPages = 5;
    component.setPage(5);
    expect(component.pager.totalItems).toBe(6);
    expect(component.pager.currentPage).toBe(5);
    expect(component.pager.totalPages).toBe(6);
  });
});
