import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IItem } from '../../interfaces/items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() favoriteItems!: Array<any>;
  modalRef?: BsModalRef;
  searchTerm!: string;

  constructor(private modalService: BsModalService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  removeFromFav(item: IItem) {
    const index = this.favoriteItems.indexOf(item);
    if (index > -1) {
      this.favoriteItems.splice(index, 1);
      this.toastr.success('Item has been removed from your favorites')
    } else{
      this.toastr.error('Fatal error');
    }
  }
}
