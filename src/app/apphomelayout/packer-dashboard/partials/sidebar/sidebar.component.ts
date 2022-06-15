import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../../_services/token-storage.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  UserName: string = '';
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.UserName = this.tokenStorage.getUser() + ""
  }
  
  menuclose() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('menu-open');
  }
}
