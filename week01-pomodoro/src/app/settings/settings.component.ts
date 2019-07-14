import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  todoItems = [
    {
      id: 0,
      done: false,
      text: 'the First thing to do today'
    },
    {
      id: 1,
      done: false,
      text: 'the second thing to do today'
    },
    {
      id: 2,
      done: false,
      text: 'the third thing to do today'
    },
    {
      id: 3,
      done: false,
      text: 'the Forth thing to do today'
    },
    {
      id: 4,
      done: false,
      text: 'complete the keynote'
    },
    {
      id: 5,
      done: false,
      text: 'prepare presentation'
    }
  ];

  doneItems = [
    {
      id: 6,
      done: true,
      text: 'mockup of the new case',
      promodoros: 4
    },
    {
      id: 7,
      done: true,
      text: 'product prototype',
      promodoros: 2
    },
    {
      id: 8,
      done: true,
      text: 'draw a wireframe',
      promodoros: 7
    },
    {
      id: 9,
      done: true,
      text: 'website detail refine',
      promodoros: 5
    }
  ];
  constructor() {}

  ngOnInit() {}

  trackByFn(index: number) {
    return index;
  }

  repeat(count: number) {
    const result = [];
    for (let i = 0; i < count; ++i) {
      result.push(null);
    }
    return result;
  }
}
