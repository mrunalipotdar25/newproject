import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }
 
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    const service = new LoginService();
    service.logStatusChanged(status);
    //console.log('A server status changed, new status: ' + status);
  }
  ngOnInit(): void {
  }

}
