import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { WorkService } from "src/app/@theme/services/work.service";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from "ngx-gallery";
@Component({
  selector: "app-portfolio-info",
  templateUrl: "./portfolio-info.component.html",
  styleUrls: ["./portfolio-info.component.css"],
})
export class PortfolioInfoComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  id: any;
  selectedProjectData: any = [];
  projectDataId: any = {
    Projectid: null,
  };
  video: any = "";
  selectedImg: string[] = [];
  selectedVideo: string[] = [];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
    infinite: false,
  };
  slideIndex = 1;
  constructor(
    private router: Router,
    private _router: ActivatedRoute,
    private workService: WorkService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.galleryOptions = [
      {
        width: "600px",
        height: "400px",
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = [
      {
        small: "assets/1-small.jpg",
        medium: "assets/1-medium.jpg",
        big: "assets/1-big.jpg",
      },
      {
        small: "assets/2-small.jpg",
        medium: "assets/2-medium.jpg",
        big: "assets/2-big.jpg",
      },
      {
        small: "assets/3-small.jpg",
        medium: "assets/3-medium.jpg",
        big: "assets/3-big.jpg",
      },
    ];
    this.getId();
  }

  getId() {
    this.id = this._router.snapshot.paramMap.get("id");
    this.projectDataId.Projectid = this.id;
    this.workService.getProjectDataById(this.projectDataId).subscribe(
      (data: any) => {
        this.selectedProjectData = data["data"];
        console.log(this.selectedProjectData);
        this.selectedProjectData.forEach((element: any) => {
          this.selectedImg = element.Projectimage;
        });
        this.selectedProjectData.forEach((element: any) => {
          this.selectedVideo = element.Projectvideo;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // plusSlides(n: any) {
  //   this.showSlides((this.slideIndex += n));
  // }

  // currentSlide(n: any) {
  //   this.showSlides((this.slideIndex = n));
  // }

  // showSlides(n: any) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("demo");
  //   let captionText = document.getElementById("caption");
  //   if (n > slides.length) {
  //     this.slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     this.slideIndex = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     //slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   // slides[this.slideIndex - 1].style.display = "block";
  //   dots[this.slideIndex - 1].className += " active";
  //   // captionText.innerHTML = dots[this.slideIndex - 1].alt;
  // }
}
