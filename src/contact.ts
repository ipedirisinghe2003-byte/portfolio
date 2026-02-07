/**
 * Contact Module
 * Handles contact form submission and validation
 */

import { getElement } from './utils.js';

export class Contact {
  private contactForm: HTMLFormElement | null;

  constructor() {
    this.contactForm = getElement<HTMLFormElement>('#contactForm');
  }

  /**
   * Setup contact form submission
   */
  setupContactForm(): void {
    if (!this.contactForm) return;

    this.contactForm.addEventListener('submit', (e: SubmitEvent) => {
      this.handleSubmit(e);
    });
  }

  /**
   * Handle form submission
   */
  private handleSubmit(e: SubmitEvent): void {
    e.preventDefault();

    if (!this.contactForm) return;

    // Validate form
    if (!this.validateForm()) {
      alert('Please fill in all required fields');
      return;
    }
    // Collect form values
    const name = (this.contactForm.querySelector('input[placeholder="Your Name"]') as HTMLInputElement)?.value || '';
    const fromEmail = (this.contactForm.querySelector('input[type="email"]') as HTMLInputElement)?.value || '';
    const subject = (this.contactForm.querySelector('input[placeholder="Subject"]') as HTMLInputElement)?.value || 'Contact Form Message';
    const message = (this.contactForm.querySelector('textarea') as HTMLTextAreaElement)?.value || '';

    const toEmail = 'ipedirisinghe2003@gmail.com';

    // Web3Forms integration
    const WEB3FORMS_ACCESS_KEY = '0739b9c6-b921-4d12-87de-f5302ab802d8';
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: subject,
      name: name,
      email: fromEmail,
      message: message,
    };

    const tryWeb3Forms = async (): Promise<boolean> => {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          // mode: 'cors' // default is fine, uncomment if needed for debugging
        });
        const text = await res.text();
        let data: any = null;
        try { data = JSON.parse(text); } catch (e) { /* not JSON */ }
        console.log('Web3Forms response status:', res.status);
        console.log('Web3Forms response text:', text);
        console.log('Web3Forms response json:', data);
        if (!res.ok) return false;
        if (data && data.success) return true;
        return false;
      } catch (e) {
        console.error('Web3Forms fetch error:', e);
        return false;
      }
    };

    // Attempt Web3Forms; fallback to mailto if it fails
    tryWeb3Forms().then((sent) => {
      if (sent) {
        alert('Message sent successfully. Thank you!');
        this.contactForm!.reset();
        return;
      }

      // Fallback: open user's email client via mailto
      const mailSubject = encodeURIComponent(subject + ' — from ' + name);
      const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:${toEmail}?subject=${mailSubject}&body=${mailBody}`;
      window.location.href = mailtoLink;
      alert('Your email client should open to send the message. If it did not, please email manually to ' + toEmail + '.');
      this.contactForm!.reset();
    });
  }

  /**
   * Validate form fields
   */
  private validateForm(): boolean {
    if (!this.contactForm) return false;

    const inputs = this.contactForm.querySelectorAll(
      'input[required], textarea[required]'
    );

    for (let input of inputs) {
      const element = input as HTMLInputElement | HTMLTextAreaElement;
      if (!element.value.trim()) {
        return false;
      }
    }

    return true;
  }

  /**
   * Initialize contact form
   */
  init(): void {
    this.setupContactForm();
  }
}
