import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  onSubmit(): void {
    this.loading = true;
    this.errorMessage = '';
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
      this.form = { name: '', email: '', phone: '', date: '', service: '', message: '' };
    }, 1500);
  }
}
