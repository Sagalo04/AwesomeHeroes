import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.scss'],
})
export class HeroesCardComponent implements OnInit {
  public Vote = 0;
  constructor() {}

  @Input() name: string;
  @Input() src: string;

  ngOnInit(): void {}
}
