import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  constructor(private readonly app: AppService) {

  }

  ngOnInit( ) {
    this.app.test().subscribe(res => {
      console.log('fewfas');

    }

    )
  }

}
