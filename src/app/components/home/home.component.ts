import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { IItem } from '../../interfaces/items';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items!: IItem[];
  pageItems!: IItem[];

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
        this.items = data.items;
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
}
