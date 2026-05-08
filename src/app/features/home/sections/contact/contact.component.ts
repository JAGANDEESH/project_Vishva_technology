import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form: ContactForm = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  loading = false;

  onSubmit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
      this.form = { name: '', email: '', subject: '', message: '' };
    }, 1500);
  }
}
