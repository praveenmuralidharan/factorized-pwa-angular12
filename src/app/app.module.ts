import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule} from 'ng-circle-progress';
import { NouisliderModule } from 'ng2-nouislider';import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { Daterangepicker } from 'ng2-daterangepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { ApphomelayoutComponent } from './apphomelayout/apphomelayout.component';
import { AppinnerlayoutComponent } from './appinnerlayout/appinnerlayout.component';
import { SigninComponent } from './authlayout/signin/signin.component';
import { StaticfooterComponent } from './apphomelayout/packer-dashboard/partials/staticfooter/staticfooter.component';
import { HeadermenuComponent } from './apphomelayout/packer-dashboard/partials/headermenu/headermenu.component';
import { SidebarComponent } from './apphomelayout/packer-dashboard/partials/sidebar/sidebar.component';

import { HomeComponent } from './apphomelayout/packer-dashboard/home/home.component';
import { orderDetailsComponent } from './apphomelayout/packer-dashboard/order-details/order-details.component';
import { addConsignmentComponent } from './apphomelayout/packer-dashboard/add-consignment/add-consignment.component';
import { consignmentDetailsComponent } from './apphomelayout/packer-dashboard/consignment-details/consignment-details.component';
import { qrScannerComponent } from './apphomelayout/packer-dashboard/qr-scanner/qr-scanner.component';
import { addContainerComponent } from './apphomelayout/packer-dashboard/add-container/add-container.component';

import { dispatcherDashboardComponent } from './apphomelayout/dispatcher-dashboard/home/dispatcher-dashboard.component';
import { dispatcherQRScannerComponent } from './apphomelayout/dispatcher-dashboard/qr-scanner/qr-scanner.component';
import { dispatcherConsignmentDetailsComponent } from './apphomelayout/dispatcher-dashboard/consignment-details/consignment-details.component';

import { receiverDashboardComponent } from './apphomelayout/receiver-dashboard/home/receiver-dashboard.component';
import { receiverQRScannerComponent } from './apphomelayout/receiver-dashboard/qr-scanner/qr-scanner.component';
import { receiverConsignmentDetailsComponent } from './apphomelayout/receiver-dashboard/consignment-details/consignment-details.component';

import { FooterinfoComponent } from './appinnerlayout/partials/footerinfo/footerinfo.component';
import { HeaderbackComponent } from './appinnerlayout/partials/headerback/headerback.component';
import { PagenotfoundComponent } from './appinnerlayout/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AuthlayoutComponent,
    ApphomelayoutComponent,
    AppinnerlayoutComponent,
    SigninComponent,
    StaticfooterComponent,
    HeadermenuComponent,
    SidebarComponent,
    HomeComponent,
    orderDetailsComponent,
    addConsignmentComponent,
    consignmentDetailsComponent,
    qrScannerComponent,
    addContainerComponent,
    FooterinfoComponent,
    HeaderbackComponent,
    PagenotfoundComponent,

    dispatcherQRScannerComponent,
    dispatcherDashboardComponent,
    dispatcherConsignmentDetailsComponent,

    receiverConsignmentDetailsComponent,
    receiverQRScannerComponent,
    receiverDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ChartsModule,
    NgCircleProgressModule.forRoot(),
    NouisliderModule,
    FullCalendarModule,
    Daterangepicker,
    HttpClientModule,
    FormsModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
