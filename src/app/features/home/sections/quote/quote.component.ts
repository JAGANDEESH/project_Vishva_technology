import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { EmailService } from '../../../../shared/services/email.service';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  form: ContactForm = { name: '', email: '', phone: '', date: '', service: '', message: '' };
  submitted = false;
  loading = false;
  errorMessage = '';

  @ViewChild('appointmentForm') appointmentForm!: NgForm;

  constructor(private emailService: EmailService) {}

  onSubmit(): void {
    // Prevent submission if required fields are empty
    if (this.appointmentForm && !this.appointmentForm.valid) {
      // Mark all controls as touched to trigger validation messages
      Object.values(this.appointmentForm.controls).forEach(control => {
        control.markAsTouched();
      });
      this.errorMessage = 'Please fill in all required fields before submitting.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.emailService.sendDemoRequest({
      name: this.form.name,
      email: this.form.email,
      phone: this.form.phone,
      companyName: this.form.date, // Form maps company name to date field
      product: this.form.service,
      message: this.form.message
    })
    .then(() => {
      this.loading = false;
      this.submitted = true;
      this.form = { name: '', email: '', phone: '', date: '', service: '', message: '' };
      if (this.appointmentForm) {
        this.appointmentForm.resetForm();
      }
    })
    .catch((error) => {
      this.loading = false;
      this.errorMessage = error?.text || error?.message || 'Failed to send your request. Please try again later.';
    });
  }
}
