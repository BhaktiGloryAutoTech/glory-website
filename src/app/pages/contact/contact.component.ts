import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ContactForm } from "src/app/@theme/modal/contact.class";
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from "@angular/forms";
import { ContactService } from "src/app/@theme/services/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  //contactForm: ContactForm = new ContactForm();
  public loading = false;
  formSubmitted: boolean = false;
  contactForm: FormGroup | any;
  constructor(
    private _route: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getData();
  }

  getData() {
    this.contactForm = new FormGroup({
      Name: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/
        ),
      ]),
      ContactNo: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]{10}/),
      ]),
      Message: new FormControl(null, [Validators.required]),
    });
  }
  addContact() {
    this.formSubmitted = true;
    this.loading = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactService.getInTouch(this.contactForm.value).subscribe(
        (data) => {
          this.contactForm.reset();
          this.formSubmitted = false;
          this.loading = false;
          this.toastr.success("Thank You! We Will reach you sonn.");
        },
        (error) => {
          this.loading = false;
          this.toastr.error("Something Went Wrong! Try Again.. ");
        }
      );
    } else {
      this.loading = false;
      return;
    }
  }
}
