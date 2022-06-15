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
  templateUrl: './dispatcher-dashboard.component.html',
  styleUrls: ['./dispatcher-dashboard.component.scss']
})

export class dispatcherDashboardComponent implements OnInit {
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
