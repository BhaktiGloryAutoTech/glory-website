import { Component, OnInit } from "@angular/core";
import { WorkService } from "src/app/@theme/services/work.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit {
  projectDataList: any = [];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
    infinite: false,
  };
  constructor(private workService: WorkService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getData();
  }

  getData() {
    this.workService.getProjectImageList().subscribe(
      (data: any) => {
        this.projectDataList = data["data"];
      },
      (error) => {}
    );
  }
}
