import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ContactForm } from "src/app/@theme/modal/contact.class";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contactForm: ContactForm = new ContactForm();

  constructor(private _route: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {}
}
