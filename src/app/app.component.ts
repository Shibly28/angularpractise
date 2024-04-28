import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog Application 3'
  imageSrc='http://bkiict.bcc.net.bd/sitecontent/img/bcc_logo.png'
  blogs=['blog post 1', 'blog post 2', 'blog post 3' ]
getTitle(){
  return this.title;
}

}
