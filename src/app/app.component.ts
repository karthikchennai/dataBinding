import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{
    type: 'server',
    name: 'test',
    content: 'test'
  }];

  updateName() {
    this.serverElements[0].name = 'Changed!';
  }

  onServerEdit(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  removeElement(){
    this.serverElements.splice(0, 1);
  }

  onBlueprintEdit(bluePrintData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.name,
      content: bluePrintData.content
    });
  }


}
