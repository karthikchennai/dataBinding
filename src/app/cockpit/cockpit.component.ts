import { Component, OnInit , EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ name: string, content: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ name: string, content: string}>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  newServerContent = '';

  constructor() { }

  onAddServer(serverName: HTMLInputElement) {

    this.serverCreated.emit({ name: serverName.value, content: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.bluePrintCreated.emit({ name: serverName.value, content: this.serverContentInput.nativeElement.value});
  }

  ngOnInit(): void {
  }

}
