import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'fomi';
  count: number = 0;
  public increament(): void {
    this.count++;
  }
  public deacriment(): void {
    this.count -= 1;
  }

  messages: string[] = ['first', 'second'];

  public ngOnInit(): void {
    console.log('კომპონენტი ინიციალიზდა');
  }
  public ngOnDestroy(): void {
    console.log('კომპონენტი განადგურდა');
  }
  imgData = {
    src: 'https://angular.io/assets/images/logos/angular/angular.svg',
    alt: 'Angular Logo',
  };
  btnDisabled = true;
  squareClass = 'square-red';
  myBgColor = 'red';
  myColor = "white";



  changeSquare(): void {
    this.squareClass =
      this.squareClass === 'square-red' ? 'square-blue' : 'square-red';
  }
}
