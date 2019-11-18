import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testserver', content: 'Just a test'}];

  // tslint:disable-next-line: ban-types
  onAddServer(serverData: {serverName: string, serverContent: string}) {

    this.serverElements.push({
     type: 'server',
     name: serverData.serverName,
     content: serverData.serverContent
   });
 }

 onAddBlueprint(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
    });
  }
}

