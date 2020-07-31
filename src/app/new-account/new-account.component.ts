import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService} from '../login.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor() { }

  @Output() accountCreated = new EventEmitter<{name: string,status: string}>();

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string,accountStatus: string) {
    this.accountCreated.emit({
      name: accountName,
      status: accountStatus
    });

    const service = new LoginService();
    service.logStatusChanged(accountStatus);

  }

}
