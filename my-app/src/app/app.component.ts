import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
title:string = 'fomi';
count:number = 0;

  messages:string[] = ['first','second'];


  public ngOnInit(): void {
    console.log('კომპონენტი ინიციალიზდა');
    
  }
  public ngOnDestroy(): void {
    console.log('კომპონენტი განადგურდა');
    
  }
}
