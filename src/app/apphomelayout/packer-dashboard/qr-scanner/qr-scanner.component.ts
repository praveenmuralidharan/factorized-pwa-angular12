import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})

export class qrScannerComponent implements OnInit {
  isChecked: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['add-container']);
    }, 5000); 
  }

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX];
  
  qrResultString!: string;

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
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
