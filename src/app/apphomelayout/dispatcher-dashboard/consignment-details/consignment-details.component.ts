import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './consignment-details.component.html',
  styleUrls: ['./consignment-details.component.scss']
})

export class dispatcherConsignmentDetailsComponent implements OnInit {
  isChecked: boolean = false;

  constructor() { }
  ngOnInit(): void {

  }

  ngAfterInit(){
    

  }
  doCheck() {
    let html = document.getElementsByTagName('html')[0];
    this.isChecked = !this.isChecked;
    if (this.isChecked == true) {
      html.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
    }
  }

}
