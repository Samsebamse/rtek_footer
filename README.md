# rtek-footer

A lightweight, customizable footer web component that inherits styles from its parent container.

## Installation

### CDN (Recommended)

```html
<script src="https://cdn.jsdelivr.net/gh/Samsebamse/rtek-footer@main/src/rtek-footer.js"></script>
```

## Usage

The component inherits `font-family`, `color`, and `background` from its parent element. Wrap it in a styled container to control the appearance.

```html
<!-- Dark theme example -->
<div style="background: #0f172a; color: white;">
  <rtek-footer
    company="Your Company"
    founded="2020"
    facebook="https://facebook.com/yourcompany"
    instagram="https://instagram.com/yourcompany"
    developer="Developer Name"
    developer-url="https://developer.com"
  ></rtek-footer>
</div>
```

## Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `company` | Company name displayed in copyright | `"Acme Inc"` |
| `founded` | Year founded (shows range if different from current year) | `"2020"` |
| `facebook` | Facebook page URL | `"https://facebook.com/acme"` |
| `instagram` | Instagram profile URL | `"https://instagram.com/acme"` |
| `x` | X (Twitter) profile URL | `"https://x.com/acme"` |
| `snapchat` | Snapchat profile URL | `"https://snapchat.com/add/acme"` |
| `linkedin` | LinkedIn company URL | `"https://linkedin.com/company/acme"` |
| `developer` | Developer/agency name | `"r-TEK"` |
| `developer-url` | Developer website URL | `"https://r-tek.io"` |
| `align` | Content alignment: `start`, `center`, `end` | `"center"` |
| `color` | Text color (overrides inherited) | `"#ffffff"` |
| `font-size` | Font size | `"0.875rem"` |
| `social-gap` | Horizontal gap between social icons (default: `2rem`) | `"1.5rem"` |
| `gap` | Vertical gap between socials and copyright (default: `0.5rem`) | `"1rem"` |

## Examples

### Centered (default)

```html
<rtek-footer
  company="My Company"
  founded="2020"
  facebook="https://facebook.com/mycompany"
  align="center"
></rtek-footer>
```

### Left-aligned

```html
<rtek-footer
  company="My Company"
  founded="2020"
  align="start"
></rtek-footer>
```

### Minimal (no socials)

```html
<rtek-footer
  company="My Company"
  founded="2023"
></rtek-footer>
```

### Custom spacing

```html
<rtek-footer
  company="My Company"
  founded="2020"
  facebook="https://facebook.com/mycompany"
  instagram="https://instagram.com/mycompany"
  social-gap="1rem"
  gap="1.5rem"
></rtek-footer>
```

## Styling

The component uses Shadow DOM but inherits key styles from its parent:

- `font-family` - Inherits from parent
- `color` - Inherits from parent
- `background` - Inherits from parent

To style the footer, wrap it in a container with your desired styles:

```html
<footer style="background: #1a1a1a; color: #cccccc; font-family: 'Helvetica', sans-serif; padding: 2rem;">
  <rtek-footer company="Styled Co" founded="2020"></rtek-footer>
</footer>
```

## License

MIT
