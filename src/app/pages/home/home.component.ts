import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/@theme/services/home.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private _sanitizer: DomSanitizer
  ) {}
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  clientData: any = [];
  imagePath: any;
  logo: any;
  ngOnInit(): void {
    window.scroll(0, 0);
    this.getClientList();
  }

  getClientList() {
    this.homeService.getClientList().subscribe(
      (data: any) => {
        this.clientData = data["data"];
        this.clientData.forEach((element: any) => {
          this.logo = element.ClientLogo;
        });

        console.log(this.clientData);
        console.log(this.imagePath);
      },
      (error) => {}
    );
  }
}
