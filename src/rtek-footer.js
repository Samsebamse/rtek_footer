/**
 * Generic Footer Web Component
 * A minimal footer component for copyright and social links
 */

class RTekFooter extends HTMLElement {
  static get observedAttributes() {
    return ['company', 'founded', 'facebook', 'instagram', 'x', 'snapchat', 'linkedin', 'developer', 'developer-url', 'align', 'color', 'font-size', 'social-gap', 'gap'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get company() {
    return this.getAttribute('company') || '';
  }

  get founded() {
    return this.getAttribute('founded') || '';
  }

  get facebook() {
    return this.getAttribute('facebook') || '';
  }

  get instagram() {
    return this.getAttribute('instagram') || '';
  }

  get x() {
    return this.getAttribute('x') || '';
  }

  get snapchat() {
    return this.getAttribute('snapchat') || '';
  }

  get linkedin() {
    return this.getAttribute('linkedin') || '';
  }

  get developer() {
    return this.getAttribute('developer') || '';
  }

  get developerUrl() {
    return this.getAttribute('developer-url') || '';
  }

  get align() {
    const val = this.getAttribute('align') || 'center';
    if (val === 'start' || val === 'left') return 'flex-start';
    if (val === 'end' || val === 'right') return 'flex-end';
    return 'center';
  }

  get color() {
    return this.getAttribute('color') || '';
  }

  get fontSize() {
    return this.getAttribute('font-size') || '';
  }

  get socialGap() {
    return this.getAttribute('social-gap') || '2rem';
  }

  get gap() {
    return this.getAttribute('gap') || '0.5rem';
  }

  render() {
    const currentYear = new Date().getFullYear();
    const yearRange = !this.founded || this.founded === String(currentYear)
      ? currentYear
      : `${this.founded} - ${currentYear}`;

    const socials = [];
    if (this.facebook) {
      socials.push(`<a href="${this.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${this.facebookIcon}</a>`);
    }
    if (this.instagram) {
      socials.push(`<a href="${this.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${this.instagramIcon}</a>`);
    }
    if (this.x) {
      socials.push(`<a href="${this.x}" target="_blank" rel="noopener" aria-label="X">${this.xIcon}</a>`);
    }
    if (this.snapchat) {
      socials.push(`<a href="${this.snapchat}" target="_blank" rel="noopener" aria-label="Snapchat">${this.snapchatIcon}</a>`);
    }
    if (this.linkedin) {
      socials.push(`<a href="${this.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${this.linkedinIcon}</a>`);
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: inherit;
          color: ${this.color || 'inherit'};
          ${this.fontSize ? `font-size: ${this.fontSize};` : ''}
          padding: 0;
          margin: 0;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: ${this.align};
        }

        .socials {
          display: flex;
          gap: ${this.socialGap};
          margin-bottom: ${this.gap};
        }

        .socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: inherit;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .socials a:visited {
          color: inherit;
        }

        .socials a:hover {
          opacity: 0.7;
        }

        .socials svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        .copyright {
          margin: 0;
        }

        .copyright a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }

        .copyright a:visited {
          color: inherit;
        }
      </style>

      <div class="container">
        ${socials.length > 0 ? `<div class="socials">${socials.join('')}</div>` : ''}
        <p class="copyright">
          &copy; ${yearRange}${this.company ? ` ${this.company}` : ''}${this.developer ? ` | ${this.developerUrl ? `<a href="${this.developerUrl}" target="_blank" rel="noopener">${this.developer}</a>` : this.developer}` : ''}
        </p>
      </div>
    `;
  }

  get facebookIcon() {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>`;
  }

  get instagramIcon() {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>`;
  }

  get xIcon() {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>`;
  }

  get snapchatIcon() {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.217-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.669.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/>
    </svg>`;
  }

  get linkedinIcon() {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`;
  }
}

customElements.define('rtek-footer', RTekFooter);
