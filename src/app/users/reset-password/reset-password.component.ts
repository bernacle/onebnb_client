import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, ResetPasswordData } from 'angular2-token';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private _resetPasswordData: ResetPasswordData = <ResetPasswordData>{};
  private _output: any;

  constructor(private _tokenService: Angular2TokenService) { }

  ngOnInit() {
  }

  // Submit Data to Backend

  onSubmit(){
    this._output = null;
    
    this._tokenService.resetPassword(this._resetPasswordData).subscribe(
      res => {
        this._resetPasswordData = <ResetPasswordData>{};
        this._output = res;
      }, error => {
        this._resetPasswordData = <ResetPasswordData>{};
        this._output = error;
      }
    );
  }

}
