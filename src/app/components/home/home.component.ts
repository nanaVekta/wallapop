import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { IItem } from '../../interfaces/items';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { containsObject } from '../../helpers/containsObject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items!: IItem[];
  itemsState!: IItem[];
  pageItems!: IItem[];
  favoriteItems: IItem[] = [];

  constructor(
    private apiService: ApiServiceService,
    private ngxUiLoader: NgxUiLoaderService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.ngxUiLoader.start();
    this.apiService.getItems()
    .subscribe(
      data => {
        this.itemsState = this.items = data.items;
        this.pageItems = this.items.slice(0, 5);
        this.ngxUiLoader.stop();
      },
      error => {
        this.toastr.error('Failed to fetch data');
        this.ngxUiLoader.stop();
      }

    )
  }

  onChangePage(pageItems: Array<any>) {
    // update current page of items
    this.pageItems = pageItems;
  }

  searchItem(event: any) {
    // get value from search box
    let value = event.target.value;

    // set items to search to actual data retrieved from api
    this.items = this.itemsState;

    // filter items
    let filteredItems = this.items.filter(item => {
      return item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.price.toString().includes(value) ||
      item.email.toLowerCase().includes(value.toLowerCase());
    });
    this.items = filteredItems;
  }

  addToFavorite(item: IItem){
    // check if object item is not already in the array then push in to array
    if(!containsObject(item, this.favoriteItems)){
      this.favoriteItems.push(item);
      this.toastr.success('Item added to favorites');
    } else {
      this.toastr.error('Item already added to favorites')
    }
  }
}
