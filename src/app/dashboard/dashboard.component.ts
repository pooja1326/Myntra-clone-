import { Component, OnInit, VERSION } from '@angular/core';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number | undefined;
  category: any;
  constructor(private CategoryService: CategoryService) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
    this.CategoryService.getCatgeory().subscribe((res: any) => {
      console.log(res);
      this.category = res;
    });
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
