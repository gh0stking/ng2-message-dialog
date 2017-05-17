import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2BootstrapModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MsgDialog } from '../components/msg-dialog.component';
import { MsgDialogService } from '../components/msg-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    MsgDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    ModalModule.forRoot()
  ],
  providers: [
    MsgDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
