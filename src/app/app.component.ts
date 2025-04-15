import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MinhapaginaComponent } from './minhapagina/minhapagina.component'
import { HelloWorldComponent } from './helloworld/helloworld.component'

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhapaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
