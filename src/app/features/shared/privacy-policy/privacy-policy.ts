import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  template: `
    <section class="privacy-policy-section">
      <div class="container">
        <div class="pp-header">
          <h1>Privacy Policy</h1>
          <p class="pp-updated">Last updated: May 2026</p>
        </div>

        <div class="pp-content">
          <div class="pp-block">
            <h2>1. Introduction</h2>
            <p>
              Vishva Technologies ("we", "our", "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services. Please read this policy
              carefully. If you do not agree with the terms of this policy, please do not access the site.
            </p>
          </div>

          <div class="pp-block">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and any other information you voluntarily provide through our contact or demo request forms.</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and other diagnostic data collected automatically.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
            </ul>
          </div>

          <div class="pp-block">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide, operate, and maintain our website and services.</li>
              <li>To respond to your inquiries, demo requests, and customer support needs.</li>
              <li>To improve our website, products, and user experience.</li>
              <li>To send periodic communications related to our services (with your consent).</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </div>

          <div class="pp-block">
            <h2>4. Data Sharing & Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share data with trusted service providers who assist us in operating our
              website or conducting our business, provided they agree to keep this information confidential.
              We may also disclose information when required by law or to protect our rights.
            </p>
          </div>

          <div class="pp-block">
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal
              information. However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to use commercially acceptable means to
              protect your data, we cannot guarantee absolute security.
            </p>
          </div>

          <div class="pp-block">
            <h2>6. Cookies Policy</h2>
            <p>
              Our website uses cookies to enhance your experience. You can choose to accept
              or decline cookies through your browser settings. Most web browsers automatically
              accept cookies, but you can modify your browser setting to decline cookies if you prefer.
              This may prevent you from taking full advantage of the website.
            </p>
          </div>

          <div class="pp-block">
            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices or content of these external sites. We encourage you to review
              the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div class="pp-block">
            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate personal data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>
          </div>

          <div class="pp-block">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated revision date. We encourage you to review this page
              periodically to stay informed about how we protect your information.
            </p>
          </div>

          <div class="pp-block">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul class="contact-list">
              <li><strong>Email:</strong> info&#64;vishvatechnologies.com</li>
              <li><strong>Phone:</strong> +91-9344964680</li>
              <li><strong>Address:</strong> 11/1G, 4th St, Durga Colony, Sembakkam, Chennai, Tamil Nadu 600073, India</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .privacy-policy-section {
      padding: 120px 0 80px;
      background: var(--surface-color, #fff);
      min-height: 100vh;
    }

    .pp-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .pp-header h1 {
      font-family: var(--heading-font, 'Inter', sans-serif);
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--heading-color, #1a1a2e);
      margin-bottom: 10px;
    }

    .pp-updated {
      color: var(--default-color, #666);
      font-size: 0.95rem;
    }

    .pp-content {
      max-width: 820px;
      margin: 0 auto;
    }

    .pp-block {
      margin-bottom: 35px;
    }

    .pp-block h2 {
      font-family: var(--heading-font, 'Inter', sans-serif);
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--heading-color, #1a1a2e);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid rgba(43, 112, 212, 0.12);
    }

    .pp-block p {
      color: var(--default-color, #444);
      line-height: 1.8;
      font-size: 1rem;
    }

    .pp-block ul {
      list-style: none;
      padding: 0;
      margin: 12px 0 0;
    }

    .pp-block ul li {
      position: relative;
      padding: 6px 0 6px 24px;
      color: var(--default-color, #444);
      line-height: 1.7;
    }

    .pp-block ul li::before {
      content: '\\2022';
      position: absolute;
      left: 8px;
      color: var(--accent-color, #224773);
      font-weight: bold;
    }

    .pp-block ul.contact-list li::before {
      display: none;
    }

    .pp-block ul.contact-list li {
      padding-left: 0;
    }
  `]
})
export class PrivacyPolicyComponent {}
