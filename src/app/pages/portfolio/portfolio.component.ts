import { Component, OnInit } from "@angular/core";
import { WorkService } from "src/app/@theme/services/work.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit {
  value: number = 3;
  projectDataList: any = [];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    infinite: false,
  };
  constructor(private workService: WorkService, private route: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getData();
  }

  getData() {
    this.workService.getProjectImageList().subscribe(
      (data: any) => {
        this.projectDataList = data["data"];
        console.log(this.projectDataList);
      },
      (error) => {}
    );
  }
}
