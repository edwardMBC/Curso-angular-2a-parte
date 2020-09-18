import { Component, OnInit } from '@angular/core';
import {SettingsService} from 'src/app/services/settings.service';

declare function customInItFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit{

  constructor( private settingsService: SettingsService ){ }

  ngOnInit(){
    customInItFunctions();
  }
 year = new Date().getFullYear();
 
}
