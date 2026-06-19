import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email.config';

export interface DemoRequestParams {
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  product: string;
  message?: string;
}

export interface ContactMessageParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  /**
   * Dispatches a Demo Request form submission to EmailJS.
   * @param params Form inputs from the Get a Demo section.
   */
  sendDemoRequest(params: DemoRequestParams): Promise<any> {
    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      from_phone: params.phone || 'N/A',
      company_name: params.companyName || 'N/A',
      product_interest: params.product,
      message: params.message || 'No additional message was provided.'
    };

    return emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templates.demoRequest,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  }

  /**
   * Dispatches a Contact Us message form submission to EmailJS.
   * @param params Form inputs from the Contact section.
   */
  sendContactMessage(params: ContactMessageParams): Promise<any> {
    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      subject: params.subject,
      message: params.message
    };

    return emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templates.contactMessage,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
  }
}
