import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service'
import { TokenStorageService } from '../../_services/token-storage.service'

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }
  is_valid_input: boolean = false
  username: string = '';
  password: string = '';
  accessToken: string = '';
  async onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        this.tokenStorage.saveUser(data.username);
        this.is_valid_input = false
        if(this.tokenStorage.saveToken(data.accessToken))
        {
          this.router.navigateByUrl('/home', { replaceUrl: true })
        }
      },
      err => {
        this.is_valid_input = true
      }
    );
  }

  ngOnInit(): void {
    var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltiptriggerList.map(function (e:any) {
      return new bootstrap.Tooltip(e)
    });
  }

}
