import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})

export class orderDetailsComponent implements OnInit {
  isChecked: boolean = false;
  orderRecord: any;
  containers: any;
  constructor(private router: ActivatedRoute, private routerNavigate: Router, private order: OrderService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    this.containers = []
    if(this.tokenStorage.getToken())
    {
      this.router.queryParams.subscribe( res=> {
        if(res.order)
        {
          this.order.get_order(res.order).subscribe(
            data => {
              this.orderRecord = data 
            },
            err => {
              console.log(err)
            }
          );
        }
        else
        {
          
        }
      })
    }
    else
    {
      this.routerNavigate.navigateByUrl('/', { replaceUrl: true })
    }
  }

  GetContainersForConsignment(consignmentId: number){
    this.order.get_order(consignmentId).subscribe(
      data => {
        this.orderRecord = data
      },
      err => {
        console.log(err)
      }
    );
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
