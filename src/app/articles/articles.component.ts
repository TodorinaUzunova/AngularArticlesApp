import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article.model';
import { ArticleData } from 'src/data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
   articles:Article[];


  constructor() { }

  ngOnInit() {
    this.articles=new ArticleData().getData();
  }

}
