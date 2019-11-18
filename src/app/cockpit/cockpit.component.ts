import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // tslint:disable-next-line: no-output-rename
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName = '';
  // newServerContent = '';
  // tslint:disable-next-line: new-parens
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() {
    console.log('Constructor called');
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('Ng On Change called');
    console.log(changes);
   }

  ngOnInit() {
    console.log('Ng On init called');
  }

   onAddServer(serverNameInput: HTMLInputElement) {
     console.log(serverNameInput.value);
     this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
     });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
     });
  }

}
