import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  private symbols:number=250;
  @Input() article:Article;
  @Input() articleDesc:string;
  descToShow:string;
  articleDescLength:number;
  showReadMoreBtn:boolean =true;
  showHideBtn:boolean=false;
  imageIsShown:boolean=true;
  imageButtonTitle:string="Show Image";

  constructor() {
    this.articleDescLength=0;
    this.descToShow="";

   }

  ngOnInit() {
  }

  readMore():void{
    this.articleDescLength+=this.symbols;
    if(this.articleDescLength>=this.articleDesc.length){
      this.showHideBtn=true;
      this.showReadMoreBtn=false;

    }
    else{
      this.descToShow=this.articleDesc.substring(0, this.articleDescLength);
       }
  }

  toggleImage():void{
      if (this.imageIsShown) {
       this.imageIsShown=!this.imageIsShown;
       this.imageButtonTitle= this.imageButtonTitle==="Show Image"? "Hide Image": "Show Image";
        
      }
    }
    hideDesc():void{
      this.descToShow="";
      this.articleDescLength=0;
      this.showHideBtn=false;
      this.showReadMoreBtn=true;
    }

}
