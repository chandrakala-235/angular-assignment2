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
  height : number = 400;
  isDisabled : boolean = true;

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
        element.classList.add("hoverbutton");
     }
     else {
        element.classList.add("showColor");
        element.classList.remove("hoverbutton");
     }
  }
  add() {
    if(this.inputValue) {
      this.inputStored.push(this.inputValue);
      this.inputValue = null;
      this.height += 50;
      this.outerBoxheightModify(this.height);
      this.settingDisableValue(false);
    }
  }
  outerBoxheightModify(height) {
    document.getElementById('outer').style.height = height+'px';
  }
  remove(input) {
    if (input) {
       var index = this.inputStored.indexOf(input);
       if (index > -1) {
         this.inputStored.splice(index,1);
          this.height -= 50;
          // document.getElementById('outer').style.height = this.height+'px';
          this.outerBoxheightModify(this.height);
       }
       if (this.inputStored.length < 1) {
         this.settingDisableValue(true);
       }
    }
  }

  showLatestInput() {
    let ele  = document.getElementById('custom_model');
    ele.className = 'show';
    var len = this.inputStored.length;
    this.latestInput = this.inputStored[len-1];
  }

  removeAll() {
    this.inputStored = [];
    this.height = 400;
    this.outerBoxheightModify(this.height);
    this.settingDisableValue(true);
  }

  closeModel() {
    let ele = document.getElementById('custom_model');
    ele.className = 'hide';
  }
}