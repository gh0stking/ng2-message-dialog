# angular2消息弹窗组件

# 使用方式：
## `1.添加MsgDialog和MsgDialogService的引用`

## `2.在页面中定义一个msgdialog组件`
<msg-dialog (msgDialogLoaded)="msgDialogLoaded($event)"></msg-dialog>

## `3.在component中定义弹窗的初始化函数`
<pre>
msgDialogLoaded(event): void {
    this.msgDialogService.initializeMsgDialog(event);
}
</pre>

## `4.使用组件`
<pre>
let dialog = this.msgDialogService.showModal({
    title: "Warning",
    okText: "OK",
    cancelText: "Cancel",
    message: "Are you sure you want to delete it?",
    showCancelButton: showCancelButton
});
dialog.onOK.subscribe(() => {
    this.deleteUser();
});
dialog.onCancel.subscribe(() => {
    console.log('delete canceled.');
});
</pre>