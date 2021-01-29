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
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  constructor(private workService: WorkService, private route: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getData();
  }

  getData() {
    this.workService.getProjectImageList().subscribe(
      (data: any) => {
        console.log("API called");
        this.projectDataList = data["data"];
        console.log(this.projectDataList);
      },
      (error) => {
        console.log("error");
      }
    );
  }
}
