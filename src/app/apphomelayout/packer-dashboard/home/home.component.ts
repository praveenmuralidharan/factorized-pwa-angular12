import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../_services/token-storage.service'
import { OrderService } from '../../../_services/orders.service'

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isChecked: boolean = false;
  orderRecords: Array<any>;
  constructor(private tokenStorage: TokenStorageService, private router: Router, private order: OrderService) { }
  ngOnInit(): void {
    if(this.tokenStorage.getToken())
    {
      this.order.get_orders().subscribe(
        data => {
          this.orderRecords = data
        },
        err => {
          
        }
      );
    }
    else
    {
      this.router.navigateByUrl('/', { replaceUrl: true })
    }
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
