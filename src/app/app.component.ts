import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog Application 3'
  imageSrc='https://na-wotp.wgcdn.co/dcont/fb/image/king-tiger-615x346.jpg'
  blogs=['blog post 1', 'blog post 2', 'blog post 3' ]
getTitle(){
  return this.title;
}
onClick(){
  console.log('Button Clicked')}
onClick1(){
console.log('Second Button clciked ')}

}
