# rtek-footer

A lightweight, customizable footer web component with optional brand, contact, hours, social links, and copyright sections. Uses Shadow DOM — backward compatible, omit new attributes for the original minimal footer.

## Installation

### CDN (Recommended)

```html
<script src="https://cdn.jsdelivr.net/gh/Samsebamse/rtek_footer@v2.0.0/src/rtek-footer.js"></script>
```

## Usage

### Full footer

```html
<rtek-footer
  company="Pelinis"
  founded="2018"
  logo="/images/logo.png"
  logo-height="7.5rem"
  tagline="Premium quality nuts, butters, and oils."
  contact-title="Contact"
  phone="+383 45 420 990"
  email="info@pelinis.com"
  address="Rr. Hakif Zejnullahu|Prishtina 10000|Kosova"
  address-url="https://maps.app.goo.gl/aasSr9n744or7deRA"
  hours-title="Hours"
  hours='[{"day":"Mon - Fri:","time":"10:00 - 19:00"},{"day":"Saturday:","time":"10:00 - 18:00"},{"day":"Sunday:","time":"Closed","closed":true}]'
  instagram="https://www.instagram.com/pelinis_ks/"
  facebook="https://www.facebook.com/peliniis"
  whatsapp="https://wa.me/38345420990"
  developer="r-TEK.io"
  developer-url="https://r-tek.io"
  bg-color="#4a3728"
  color="rgba(253, 248, 243, 0.7)"
  accent-color="#c4a35a"
  border-color="rgba(253, 248, 243, 0.1)"
  align="center"
  social-gap="1.5rem"
  gap="1rem"
></rtek-footer>
```

### Minimal (backward compatible)

```html
<rtek-footer
  company="My Company"
  founded="2020"
  facebook="https://facebook.com/mycompany"
  developer="r-TEK.io"
  developer-url="https://r-tek.io"
  align="center"
></rtek-footer>
```

## Attributes

### Brand

| Attribute | Description | Default |
|-----------|-------------|---------|
| `logo` | Logo image URL | — |
| `logo-height` | Logo height | `6rem` |
| `tagline` | Description text below logo | — |

### Contact

| Attribute | Description | Notes |
|-----------|-------------|-------|
| `contact-title` | Section heading | e.g. "Contact" |
| `phone` | Phone number | Auto `tel:` link |
| `email` | Email address | Auto `mailto:` link |
| `address` | Pipe-separated lines | e.g. `"Street\|City\|Country"` |
| `address-url` | Google Maps URL | Makes address clickable |

### Hours

| Attribute | Description | Notes |
|-----------|-------------|-------|
| `hours-title` | Section heading | e.g. "Hours" |
| `hours` | JSON array | `[{"day":"Mon-Fri:","time":"09-17"},{"day":"Sun:","time":"Closed","closed":true}]` |

### Social

| Attribute | Description |
|-----------|-------------|
| `facebook` | Facebook page URL |
| `instagram` | Instagram profile URL |
| `tiktok` | TikTok profile URL |
| `x` | X (Twitter) profile URL |
| `snapchat` | Snapchat profile URL |
| `linkedin` | LinkedIn company URL |
| `whatsapp` | WhatsApp link (wa.me format) |

### Theming

| Attribute | Description | Default |
|-----------|-------------|---------|
| `bg-color` | Footer background color | `transparent` |
| `color` | Text color | inherited |
| `accent-color` | Headings, icons, hover, "closed" label | inherited |
| `border-color` | Top border + bottom bar border | none |

### Layout

| Attribute | Description | Default |
|-----------|-------------|---------|
| `company` | Company name (copyright) | — |
| `founded` | Year founded (year range) | — |
| `developer` | Developer name | — |
| `developer-url` | Developer website | — |
| `align` | `start` / `center` / `end` | `center` |
| `font-size` | Base font size | inherited |
| `social-gap` | Gap between social icons | `2rem` |
| `gap` | Gap between social row and copyright | `0.5rem` |

## Slots

The component supports a default `<slot>` for project-specific content above the grid sections:

```html
<rtek-footer company="Pelinis" ...>
  <div class="my-custom-section">
    Custom content here (e.g. document downloads)
  </div>
</rtek-footer>
```

## Responsive

The grid sections adapt automatically:
- **Desktop**: `1.5fr 1fr 1fr` (brand wider)
- **< 64em**: `repeat(2, 1fr)` (brand spans full width)
- **< 40em**: `1fr` (single column, centered)

## Styling

The component uses Shadow DOM but inherits `font-family` from its parent. Wrap it in a container with your desired font:

```html
<div class="josefin">
  <rtek-footer company="Pelinis" ...></rtek-footer>
</div>
```

## Demo

Open [demo.html](demo.html) to see all variants.

## License

MIT
