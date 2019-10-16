import {
  Directive,
  HostListener,
  Input,
  ElementRef
} from '@angular/core';
@Directive({
  selector: '[advancedInput]'
})
export class NgxAdvancedInputDirective {
  // Allow decimal numbers and negative values
	private readonly regex: RegExp = new RegExp(/^[a-zA-Z0-9]*$/);
	private readonly regexWithSpace: RegExp = new RegExp(/^[a-zA-Z0-9 ]*$/);
	private readonly regexWithUnderScore: RegExp = new RegExp(/^[a-zA-Z0-9_]*$/);
	private readonly numberRegex: RegExp = new RegExp(/^-?([0-9]*)+(\.[0-9]*){0,1}$/g);
	private readonly numberWithFullColon: RegExp = new RegExp(/^-?([0-9]*)+(\:[0-9]*){0,1}$/g);
	private readonly strictlyNumberRegExp: RegExp = new RegExp(/^[0-9]*$/g);
	// Allow key codes for special events. Reflect :
	// Backspace, tab, end, home
	private readonly specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', 'Delete' ];
	private isSpaceEntered = false;
	@Input('inputType') inputType: string;
	constructor(private readonly el: ElementRef) {}
	@HostListener('keydown', [ '$event' ])
	onKeyDown(event: KeyboardEvent) {
		// Allow Backspace, tab, end, and home keys
		if (this.specialKeys.indexOf(event.key) !== -1) {
			return;
		}
		if (this.inputType === 'alphaWithSpace') {
			if (event.code === 'Space' && this.el.nativeElement.value.length === 0) {
				event.preventDefault();
			} else if (event.code === 'Space' && this.el.nativeElement.value.length > 0) {
				if (this.isSpaceEntered) {
					event.preventDefault();
				} else {
					this.isSpaceEntered = true;
				}
			} else {
				this.isSpaceEntered = false;
				const current: string = this.el.nativeElement.value;
				const next: string = current.concat(event.key);
				if (next && !String(next).match(this.regexWithSpace)) {
					event.preventDefault();
				}
			}
		} else if (this.inputType === 'alpha') {
			if (event.keyCode === 37 || event.keyCode === 39) {
			} else {
				const current: string = this.el.nativeElement.value;
				const next: string = current.concat(event.key);
				if (next && !String(next).match(this.regex)) {
					event.preventDefault();
				}
			}
		} else if (this.inputType === 'noSpace') {
			if (event.code === 'Space' && this.el.nativeElement.value.length === 0) {
				event.preventDefault();
			} else if (event.code === 'Space' && this.el.nativeElement.value.length > 0) {
				if (this.isSpaceEntered) {
					event.preventDefault();
				} else {
					this.isSpaceEntered = true;
				}
			} else {
				this.isSpaceEntered = false;
			}
		} else if (this.inputType === 'number') {
			if ((event.ctrlKey || event.metaKey) && event.keyCode == 67) {
			} else if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
			} else if (event.keyCode === 37 || event.keyCode === 39) {
			} else {
				const current: string = this.el.nativeElement.value;
				const next: string = current.concat(event.key);
				if (next && !String(next).match(this.numberRegex)) {
					event.preventDefault();
				}
			}
		} else if (this.inputType === 'strictlyNumber') {
			if ((event.ctrlKey || event.metaKey) && event.keyCode == 67) {
			} else if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
			} else if (event.keyCode === 37 || event.keyCode === 39) {
			} else {
				const current: string = this.el.nativeElement.value;
				const next: string = current.concat(event.key);
				if (next && !String(next).match(this.strictlyNumberRegExp)) {
					event.preventDefault();
				}
			}
		} else if (this.inputType === 'noFSpace') {
			if (event.code === 'Space' && this.el.nativeElement.value.length === 0) {
				event.preventDefault();
			}
		} else if (this.inputType === 'alphaWithUnderscore') {
			const current: string = this.el.nativeElement.value;
			const next: string = current.concat(event.key);
			if (next && !String(next).match(this.regexWithUnderScore)) {
				event.preventDefault();
			}
		} else if (this.inputType === 'numberWithColon') {
			const current: string = this.el.nativeElement.value;
			const next: string = current.concat(event.key);
			if (next && !String(next).match(this.numberWithFullColon)) {
				event.preventDefault();
			}
		}
	}


}