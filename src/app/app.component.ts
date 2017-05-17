import { Component } from '@angular/core';

import { MsgDialog } from '../components/msg-dialog.component';
import { MsgDialogService } from '../components/msg-dialog.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private msgDialogService: MsgDialogService, private userService: UserService) { }

  msgDialogLoaded(event): void {
    this.msgDialogService.initializeMsgDialog(event);
  }

  showDialog(showCancelButton: boolean): void {
    this.msgDialogService.showModal({
      title: "Warning",
      okText: "OK",
      cancelText: "Cancel",
      message: "Are you sure you want to delete it?",
      showCancelButton: showCancelButton
    });
  }

  deleteUser(): void {
    this.userService.deleteUser().subscribe(res => {
      console.log('bingo');
    });
  }

}
