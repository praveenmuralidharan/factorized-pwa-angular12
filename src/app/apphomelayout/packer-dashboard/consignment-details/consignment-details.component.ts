import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

export class consignmentDetailsComponent implements OnInit {
  isChecked: boolean = false;

  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.queryParams.subscribe( res=> {
      console.log(res)
    })
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
