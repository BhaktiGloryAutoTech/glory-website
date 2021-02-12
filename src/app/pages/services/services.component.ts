import { Component, OnInit, TemplateRef } from "@angular/core";
import { ServiceService } from "src/app/@theme/services/service.service";
import { ElementRef, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "src/app/@theme/services/contact.service";
import { ToastrService } from "ngx-toastr";
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
  constructor(
    private serviceService: ServiceService,
    private modalService: NgbModal,
    private contactService: ContactService,
    private tostrService: ToastrService
  ) {}
  serviceList: any = [];
  ngOnInit(): void {
    window.scroll(0, 0);
    //this.getServiceList();
    this.modalService.open(this.success, { centered: true });
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
      },
      (error) => {}
    );
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
          this.tostrService.success("WE Will Get Back to you soon");
        },
        (error) => {}
      );
    } else {
      this.loading = false;
      return;
    }
  }
}
