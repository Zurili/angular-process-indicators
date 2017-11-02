class ButtonProcessIndicatorCtrl {
  onClick() {
    this.action();
  }
}

export const ButtonProcessIndicatorComponent = {
  templateUrl: './button-process-indicator.html',
  bindings: {
    buttonCssClass: '<',
    buttonText: '<',
    isProcessing: '<',
    isDisabled: '<',
    action: '&'
  },
  controller: ButtonProcessIndicatorCtrl
};
