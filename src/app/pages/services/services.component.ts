import { Component, OnInit, TemplateRef } from "@angular/core";
import { ServiceService } from "src/app/@theme/services/service.service";
import { ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "src/app/@theme/services/contact.service";
@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  @ViewChild("content", { static: true })
  content!: TemplateRef<any>;
  @ViewChild("success", { static: true })
  success!: TemplateRef<any>;
  mod: any;
  public loading = false;
  contactForm: FormGroup | any;
  formSubmitted: boolean = false;
  stackList: any = [];
  serviceList: any = [];
  stackIcon: any = [];
  block1: boolean = false;
  block2: boolean = false;
  constructor(
    private serviceService: ServiceService,
    private modalService: NgbModal,
    private contactService: ContactService
  ) {}
  ngOnInit(): void {
    window.scroll(0, 0);
    this.getServiceList();
    this.getContactData();
    this.mod = setInterval(() => {
      this.modalService.open(this.content, { centered: true });
      clearInterval(this.mod);
    }, 7000);
  }

  getServiceList() {
    this.serviceService.getServiceList().subscribe(
      (data: any) => {
        this.serviceList = data["data"];
        console.log(this.serviceList);
        this.serviceList.forEach((element: any) => {
          this.stackList.push(element.Stack);
        });
        // this.serviceList.map((element: any) => {
        //   this.stackList.push(element.Stack);
        // });
        for (let i = 0; i < this.serviceList.length; i++) {
          for (let j = 0; j <= this.serviceList[i].length; j++) {
            this.stackIcon.push(this.serviceList[i][j]);
            console.log(this.stackIcon);
          }
        }
        console.log(this.stackIcon);
        console.log(this.stackList);
      },
      (error) => {}
    );
    this.block1 = true;
    this.block2 = false;
  }
  getContactData() {
    this.contactForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/
        ),
      ]),
      ContactNo: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}/),
      ]),
    });
  }
  addContact() {
    this.formSubmitted = true;
    this.loading = true;
    if (this.contactForm.valid) {
      this.contactService.getInTouch(this.contactForm.value).subscribe(
        (data) => {
          this.loading = false;
          this.modalService.dismissAll();
          this.modalService.open(this.success, { centered: true, size: "sm" });
        },
        (error) => {}
      );
    } else {
      this.loading = false;
      return;
    }
  }
  addsuccess() {
    this.modalService.dismissAll();
  }
}
