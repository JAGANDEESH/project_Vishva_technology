import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { EmailService } from '../../../../shared/services/email.service';

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
  errorMessage = '';

  @ViewChild('contactForm') contactFormRef!: NgForm;

  constructor(private emailService: EmailService) {}

  onSubmit(): void {
    // Prevent submission if required fields are empty
    if (this.contactFormRef && !this.contactFormRef.valid) {
      Object.values(this.contactFormRef.controls).forEach(control => {
        control.markAsTouched();
      });
      this.errorMessage = 'Please fill in all required fields before sending.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.emailService.sendContactMessage({
      name: this.form.name,
      email: this.form.email,
      subject: this.form.subject,
      message: this.form.message
    })
    .then(() => {
      this.loading = false;
      this.submitted = true;
      this.form = { name: '', email: '', subject: '', message: '' };
      if (this.contactFormRef) {
        this.contactFormRef.resetForm();
      }
    })
    .catch((error) => {
      this.loading = false;
      this.errorMessage = error?.text || error?.message || 'Failed to send your message. Please try again later.';
    });
  }
}
