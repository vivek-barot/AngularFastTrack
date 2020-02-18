import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(public toasterService: ToastrService) { }

  dynamicConsole(data) {
    console.log(data);
  }

  showSuccess(message) {
    return this.toasterService.success(message, 'Success');
  }

  showError(message) {
    return this.toasterService.error(message, "Error");
  }

  showInfo(message){
    return this.toasterService.info(message, "Login Info");
  }
}