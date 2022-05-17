import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: any = [
    {
      display: 'Diagnosa Diabetes',
      description:
        'Aplikasi diagnosa diabetes dapat mengurangi angka kematian akibat diabetes dengan mendeteksi gejalanya sejak dini.',
      picture: 'https://i.imgflip.com/2g3upx.jpg',
      path: 'diagnosa-diabetes',
      isFavorited: false,
    },
  ];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  goToProduct(path: string): void {
    this.router.navigate(['app', path]);
  }
}
