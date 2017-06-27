import { Subscription } from 'rxjs/Rx';
import { ModalDirective } from 'ngx-bootstrap';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ReflectiveInjector, EventEmitter, Output, Input } from '@angular/core';

export class MsgDialogSettings {
    public title: string;
    public message: string;
    public okText?: string;
    public cancelText?: string;
    public showCancelButton?: boolean;
}

@Component({
    selector: 'msg-dialog',
    templateUrl: './msg-dialog.html',
    styleUrls: ['./msg-dialog.css']
})
export class MsgDialog implements OnInit {
    @Output("onOK") onOK: EventEmitter<any> = new EventEmitter<any>();
    @Output("onCancel") onCancel: EventEmitter<any> = new EventEmitter<any>();
    @Output("msgDialogLoaded") msgDialogLoaded = new EventEmitter<MsgDialog>();
    @ViewChild('msgDialogModal') msgDialogModal: ModalDirective;

    private modalSubscriptions: Subscription[] = [];
    private settings: MsgDialogSettings;

    constructor(private resolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.msgDialogLoaded.emit(this);
        this.msgDialogModal.onHidden.subscribe(() => {
            this.onOK = new EventEmitter<any>();
            this.onCancel = new EventEmitter<any>();
        });
    }

    public showModal(settings: MsgDialogSettings): MsgDialog {
        this.settings = settings;
        this.msgDialogModal.show();
        return this;
    }

    public hideModal() {
        this.msgDialogModal.hide();
    }

    public onShown(action: () => void) {
        this.modalSubscriptions.push(this.msgDialogModal.onShown.subscribe(action));
    }

    public onHidden(action: () => void) {
        this.modalSubscriptions.push(this.msgDialogModal.onHidden.subscribe(() => {
            action();
            this.clearSubscriptions();
        }));
    }

    private clearSubscriptions() {
        this.modalSubscriptions.map(sub => { sub.unsubscribe(); });
        this.modalSubscriptions = [];
    }

    private onOkEvent(): void {
        if (this.onOK) {
            this.onOK.emit(true);
        }

        this.hideModal();
    }

    private onCancelEvent(): void {
        if (this.settings && this.settings.showCancelButton && this.onCancel) {
            this.onCancel.emit(false);
        }

        this.hideModal();
    }
}