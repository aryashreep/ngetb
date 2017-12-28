import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Aryashree Pritikrishna :: Portfolio & Blogging :: eTechBuddy';
  constructor(private titleService: Title) { }

  ngOnInit() {
	  this.titleService.setTitle(this.title);
  }
}
