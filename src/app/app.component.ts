import { Component, OnInit } from '@angular/core';
import { TweenLite } from 'gsap';
import { ScrollMagic } from 'scrollmagic';
import "ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";
import 'ScrollMagic/scrollmagic/minified/plugins/animation.gsap.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ryan Hernandez';

  ngOnInit(): void {
    TweenLite.from('.crop', 1, { autoAlpha: 0, x: -200 });
  }
}
