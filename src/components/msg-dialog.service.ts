import { ModalOptions } from 'ngx-bootstrap';
import { MsgDialog, MsgDialogSettings } from './msg-dialog.component';
import { Injectable } from '@angular/core';

@Injectable()
export class MsgDialogService {
    private msgDialogComponent: MsgDialog;

    public initializeMsgDialog(msgDialog: MsgDialog) {
        this.msgDialogComponent = msgDialog;
    }

    public showModal(settings: MsgDialogSettings): MsgDialog {
        return this.msgDialogComponent.showModal(settings);
    }

    public hideModal() {
        this.msgDialogComponent.hideModal();
    }

    public onShown(action: () => void) {
        this.msgDialogComponent.onShown(action);
    }

    public onHidden(action: () => void) {
        let hidden = this.msgDialogComponent.onHidden(action);
    }
}
