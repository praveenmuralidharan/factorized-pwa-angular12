import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './packer-dashboard/home/home.component';
import { orderDetailsComponent } from './packer-dashboard/order-details/order-details.component';
import { addConsignmentComponent } from './packer-dashboard/add-consignment/add-consignment.component';
import { consignmentDetailsComponent } from './packer-dashboard/consignment-details/consignment-details.component';
import { qrScannerComponent } from './packer-dashboard/qr-scanner/qr-scanner.component';
import { addContainerComponent } from './packer-dashboard/add-container/add-container.component';

import { dispatcherDashboardComponent } from './dispatcher-dashboard/home/dispatcher-dashboard.component';
import { dispatcherQRScannerComponent } from './dispatcher-dashboard/qr-scanner/qr-scanner.component';
import { dispatcherConsignmentDetailsComponent } from './dispatcher-dashboard/consignment-details/consignment-details.component';

import { receiverDashboardComponent } from './receiver-dashboard/home/receiver-dashboard.component';
import { receiverQRScannerComponent } from './receiver-dashboard/qr-scanner/qr-scanner.component';
import { receiverConsignmentDetailsComponent } from './receiver-dashboard/consignment-details/consignment-details.component';

import { ApphomelayoutComponent } from './apphomelayout.component';

const routes: Routes = [
  {
    path:'',
    component: ApphomelayoutComponent,

    children:[
      {
        path:'home',
        component: HomeComponent
      },      
      {
        path:'order-details',
        component: orderDetailsComponent
      },      
      {
        path:'add-consignment',
        component: addConsignmentComponent
      },      
      {
        path:'consignment-details',
        component: consignmentDetailsComponent
      },      
      
      {
        path:'qr-scanner',
        component: qrScannerComponent
      },      
      {
        path:'add-container',
        component: addContainerComponent
      },    
      {
        path:'dispatcher-home',
        component: dispatcherDashboardComponent
      },      
      {
        path:'scan-consignment-qr',
        component: dispatcherQRScannerComponent
      },      
      {
        path:'show-consignment-details',
        component: dispatcherConsignmentDetailsComponent
      },    

      {
        path:'receiver-home',
        component: receiverDashboardComponent
      },      
      {
        path:'scan-consignment-qr-for-receiver',
        component: receiverQRScannerComponent
      },      
      {
        path:'show-consignment-details-for-receiver',
        component: receiverConsignmentDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ApphomelayoutRoutingModule { }
