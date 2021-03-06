import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  headTitle = "United Kingdom: Hydroelectricity Consumption";
  content =
    "dasssssasdddddddddddddddddddddddddddd\nddddddddddddddddddddddddddd\
    dd\nddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddd\nddd\
    dddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dd\nddddddddddddssssssssssssssssssssssssssssssssdasssssasdddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    ddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    ddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssdasssssasdddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssdasssssasdddd\
    ddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddd\ndddddddddddddddddddddssssssssssssssssssssssssssssssssdasssssasddddddddd\
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddd\
    dddddddddddddddddddssssssssssssssssssssssssssssssssdasssssasddddddddddddddddddddddddddddd\
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    ssssssssssssssssssssssssssssssssdasssssasdddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsssssssssssssssssss\
    sssssssssssssdasssssasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddd\
    ddddddddddddddddddddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssdasssssasd\
    dddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    ddddddddddddddddddddddssssssssssssssssssssssssssssssssdasssssasddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsssssssssss\
    sssssssssssssssssssssdasssssasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    ddddddddddddddddddddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssdasssssasddd\
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\
    dddddddd\ndddddddddddssssssssssssssssssssssssssssss\nssddddddddddddddddddddddddddddddddddddddd\
    ddddd\nddddddddddddddddd\nddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddd\
    ddddddddddddddd\ndddddddddd";
  editable = false;

  constructor() {}

  ngOnInit(): void {}

  onNameChange(val) {
    console.log("Changed", val);
  }
}
