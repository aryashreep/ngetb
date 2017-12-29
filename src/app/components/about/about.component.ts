import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ArticlesService } from '../../service/articles.service';
import { Articles } from '../../interface/articles';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ArticlesService]
})
export class AboutComponent implements OnInit {
  title = "Arya's portfolio :: eTechBuddy";
  _articlesArray: Articles[];
  
  constructor(private titleService: Title, private articlesSerivce: ArticlesService) { }

  getArticles(): void{
	this.articlesSerivce.getArticles()
	  .subscribe(
		resultArray => this._articlesArray = resultArray,
		error => console.log('Error :: ' + error)
	  )
  }  
  
  ngOnInit() {
	  this.titleService.setTitle(this.title);
	  this.getArticles();
  }
}
