import { getLocaleDateFormat } from "@angular/common";
import { Component, TemplateRef, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as AOS from "aos";
import { ContactService } from "./@theme/services/contact.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("success", { static: true })
  success!: TemplateRef<any>;
  public loading = false;
  title = "test-application";
  remove: boolean = false;
  today: any;
  Year: any;
  contactForm: FormGroup | any;
  formSubmitted: boolean = false;
  constructor(
    private router: Router,
    private contactService: ContactService,
    private modalService: NgbModal
  ) {}
  ngOnInit() {
    AOS.init();
    this.getCurrentDate();
    this.getContactNo();
  }
  getCurrentDate() {
    this.today = new Date();
    this.Year = this.today.getFullYear();
  }
  reload(value: any) {
    this.router.navigate([value]).then(() => {
      document
        .getElementById("navbarSupportedContent")
        ?.classList.remove("show");
    });
  }
  getContactNo() {
    this.contactForm = new FormGroup({
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
          document.getElementById("call")?.classList.remove("active");
          this.contactForm.reset();
          this.modalService.open(this.success, { centered: true, size: "sm" });
        },
        (error) => {}
      );
    } else {
      this.loading = false;
      return;
    }
  }
  addgetsuc(){
    this.modalService.dismissAll();
  }
}
