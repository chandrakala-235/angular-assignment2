import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  styleUrls: ['./assigment2.component.css']
})
export class Assigment2Component implements OnInit {
  inputValue : string = '';
  inputStored = [];
  latestInput : number;
  isDisabled : boolean = true;
  showModel :boolean = false;
  showError :boolean = false;
  duplicateError :boolean = false;

  constructor() { }

  ngOnInit() {
  }
  storeValue(event) {
    this.inputValue = event.target.value;
  }
  settingDisableValue(isDisabled) {
     this.isDisabled  = isDisabled;
     var element = document.getElementById('showButton');
     if (!this.isDisabled) {
        element.classList.remove("showColor");
        element.classList.add("hover");

     }
     else {
        element.classList.add("showColor");
        element.classList.remove("hover");
     }
  }

  duplicateErrorMethod(): boolean {
    var index = this.inputStored.indexOf(this.inputValue);
    if (index > -1) {
      this.duplicateError = true;
      this.showError = false;
    }
    else {
      this.showError = false;
      this.duplicateError = false;
    }
    return this.duplicateError;
  }

  add() {
    if(this.inputValue && !this.duplicateErrorMethod()) {
      this.inputStored.push(this.inputValue);
      this.inputValue = null;
      this.settingDisableValue(false);
      this.showError = false;
      this.duplicateError = false;
     }
    else if (!this.inputValue){
      this.showError = true;
      this.duplicateError = false;
    }
    
  }
  remove(input) {
    if (input) {
       var index = this.inputStored.indexOf(input);
       if (index > -1) {
         this.inputStored.splice(index,1);
       }
       if (this.inputStored.length < 1) {
         this.settingDisableValue(true);
       }
    }
  }

  showLatestInput() {
    var len = this.inputStored.length;
    this.latestInput = this.inputStored[len-1];
    document.getElementById("body").style.opacity = "0.2";
    this.showModel = true;
  }

  removeAll() {
    this.inputStored = [];
    this.settingDisableValue(true);
  }

  closeModel() {
    this.showModel = false;
    document.getElementById("body").style.opacity = "1";
  }
}