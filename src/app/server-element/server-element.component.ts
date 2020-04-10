
import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck  , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit , OnChanges , DoCheck , AfterContentInit , AfterContentChecked , AfterViewInit ,AfterViewChecked , OnDestroy {

 @Input('serverComponentElement')  element: {type: string , name: string, content: string};

 @Input() name: string;

 @ViewChild('heading', {static: true}) header: ElementRef;

 @ContentChild('paragraphContent', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('Constructor called.');
  }

  ngOnDestroy() {
    console.log('Destroyed!');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked! ');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit!');
    console.log('This is heading view' + this.header.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked! ');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called!');
    console.log('This is Paragraph content afterContentinit' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Onchanges called!');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('Docheck called.');
  }

  ngOnInit(): void {
    console.log('Init called.');
    console.log('This is heading init' + this.header.nativeElement.textContent);
    console.log('This is Paragraph content init' + this.paragraph.nativeElement.textContent);
  }

}
