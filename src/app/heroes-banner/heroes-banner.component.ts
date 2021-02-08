import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes-banner',
  templateUrl: './heroes-banner.component.html',
  styleUrls: ['./heroes-banner.component.scss'],
})
export class HeroesBannerComponent implements OnInit {
  public option = 'init';

  public nlikes: any = null;
  public ndislikes: any = null;

  public intlikes: any = null;
  public intdislikes: any = null;

  public likes: any = null;
  public dislikes: any = null;

  public postId: any = null;
  public sum = 0;
  public obj: any = null;
  constructor(private httpClient: HttpClient) {}
  public url = 'https://5fc6641b4931580016e3cf35.mockapi.io/Votes/1';
  onClick(stateS) {
    switch (stateS) {
      case 1:
        this.option = 'like';
        this.nlikes = parseInt(this.nlikes) + 1;
        this.ndislikes = parseInt(this.ndislikes);
        let bodyL = new URLSearchParams();
        bodyL.set('Like', this.nlikes.toString());
        console.log(bodyL.toString());

        const headersL = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };

        this.httpClient
          .put<any>(this.url, bodyL.toString(), { headers: headersL })
          .subscribe((data) => console.log(data)),
          (this.intlikes = ((this.nlikes / this.sum) * 100) | 0),
          (this.intdislikes = ((this.ndislikes / this.sum) * 100) | 0),
          (this.likes = (this.nlikes / this.sum) * 100),
          (this.dislikes = (this.ndislikes / this.sum) * 100);
        break;
      case 2:
        this.option = 'dislike';
        this.nlikes = parseInt(this.nlikes);
        this.ndislikes = parseInt(this.ndislikes) + 1;
        let bodyD = new URLSearchParams();
        bodyD.set('Dislike', this.ndislikes.toString());
        console.log(bodyD.toString());

        const headersD = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };

        this.httpClient
          .put<any>(this.url, bodyD.toString(), { headers: headersD })
          .subscribe((data) => console.log(data)),
          (this.sum = parseInt(this.ndislikes) + parseInt(this.nlikes)),
          (this.intlikes = ((this.nlikes / this.sum) * 100) | 0),
          (this.intdislikes = ((this.ndislikes / this.sum) * 100) | 0),
          (this.likes = (this.nlikes / this.sum) * 100),
          (this.dislikes = (this.ndislikes / this.sum) * 100);

        break;
      case 3:
        this.option = 'init';
        break;
      default:
        this.option = 'like';
        break;
    }
  }

  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe((apiData) => {
      (this.obj = apiData),
        (this.nlikes = this.obj.Like),
        (this.ndislikes = this.obj.Dislike),
        (this.sum = parseInt(this.ndislikes) + parseInt(this.nlikes)),
        (this.intlikes = ((this.nlikes / this.sum) * 100) | 0),
        (this.intdislikes = ((this.ndislikes / this.sum) * 100) | 0),
        (this.likes = (this.nlikes / this.sum) * 100),
        (this.dislikes = (this.ndislikes / this.sum) * 100);
    });
  }
}
