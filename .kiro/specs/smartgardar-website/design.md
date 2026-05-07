# Design Document: Smartgarðar Website

## Overview

Smartgarðar is a multi-page marketing website for an Icelandic gardening company. The site presents four services (grassláttur, beðahreinsun, trjáklippingar, almenn garðhirða), builds trust with visitors, and funnels them toward a contact form. The architecture is a client-side rendered React SPA with React Router handling page transitions, TailwindCSS for styling, and centralised data files for all content.

The site has no backend, no database, and no external API integrations. The contact form performs client-side validation only — form submission handling (email service, API endpoint) is out of scope for this spec.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  index.html                                             │
│  ├── Google Fonts (display + body)                      │
│  └── <div id="root">                                   │
│       └── main.tsx                                      │
│            └── BrowserRouter                            │
│                 └── App.tsx (Routes)                    │
│                      └── Layout                         │
│                           ├── Header                    │
│                           ├── <main> (page content)     │
│                           └── Footer                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Route Map                                              │
│  ├── /              → HomePage                          │
│  ├── /thjonusta     → ServicesPage                      │
│  ├── /um-okkur      → AboutPage                        │
│  ├── /hafdu-samband → ContactPage                       │
│  └── *              → NotFoundPage                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Data Flow                                              │
│                                                         │
│  src/data/services.ts ──→ ServiceHighlights             │
│                       ──→ ServicesPage                   │
│                       ──→ ContactPage (service select)   │
│                       ──→ Footer (services summary)      │
│                                                         │
│  src/data/site.ts ──→ Header (nav labels, company name) │
│                   ──→ Footer (contact info, nav)         │
│                   ──→ All pages (meta title/description) │
└─────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

| Decision | Rationale |
| --- | --- |
| Client-side routing (React Router) | Multi-page feel without server, fast transitions |
| No global state library | Local component state sufficient for form + mobile menu |
| Centralised data files | Single source of truth for content, easy to update |
| Pure validation functions in `src/lib/` | Testable, reusable, separated from UI |
| TailwindCSS with CSS custom properties | Design tokens for palette, responsive utilities |
| Google Fonts via `<link>` in index.html | Simplest loading strategy for Vite (no next/font) |

## Components and Interfaces

### File Structure

```
src/
├── App.tsx                          # Router + route definitions
├── main.tsx                         # React root + BrowserRouter
├── index.css                        # Tailwind directives + CSS variables
├── components/
│   ├── layout/
│   │   ├── Layout.tsx               # Header + main + Footer wrapper
│   │   ├── Header.tsx               # Logo, nav, mobile toggle, CTA
│   │   ├── Footer.tsx               # Services summary, nav, contact CTA
│   │   └── MobileMenu.tsx           # Collapsible mobile navigation
│   ├── sections/
│   │   ├── HeroSection.tsx          # Home hero with headline + CTA
│   │   ├── ServiceHighlights.tsx    # Home service cards grid
│   │   └── TrustSection.tsx         # Home trust/reliability content
│   └── ui/
│       ├── ServiceCard.tsx          # Reusable service display card
│       ├── Button.tsx               # Button with variant support
│       ├── FormField.tsx            # Label + input + error wrapper
│       └── SuccessMessage.tsx       # Form success feedback
├── pages/
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
├── data/
│   ├── services.ts                  # Service content array
│   └── site.ts                      # Company info, nav, page meta
├── hooks/
│   └── useContactForm.ts           # Form state + validation + submit
├── lib/
│   ├── validators.ts               # Pure validation functions
│   └── cn.ts                       # className merge utility
└── types/
    ├── service.ts                   # Service type definition
    ├── contact.ts                   # Form data + errors types
    └── site.ts                      # Site data types
```

### Component Hierarchy

```
App
└── Layout
    ├── Header
    │   └── MobileMenu (conditional)
    ├── Routes
    │   ├── HomePage
    │   │   ├── HeroSection
    │   │   │   └── Button
    │   │   ├── ServiceHighlights
    │   │   │   └── ServiceCard (×4)
    │   │   └── TrustSection
    │   ├── ServicesPage
    │   │   └── ServiceCard (×4, detailed variant)
    │   ├── AboutPage
    │   ├── ContactPage
    │   │   ├── FormField (×5)
    │   │   ├── Button
    │   │   └── SuccessMessage (conditional)
    │   └── NotFoundPage
    │       └── Button
    └── Footer
```

### Component Interfaces

```typescript
// Layout
type LayoutProps = {
  children: React.ReactNode;
}

// Header — no props, reads from site.ts
// Footer — no props, reads from site.ts and services.ts

// MobileMenu
type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
}

// Button
type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;        // renders as <Link> when provided
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// ServiceCard
type ServiceCardProps = {
  service: Service;
  variant?: 'compact' | 'detailed';
}

// FormField
type FormFieldProps = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  value: string;
  error?: string;
  options?: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}

// SuccessMessage
type SuccessMessageProps = {
  message: string;
}

// HeroSection — no props, reads from site.ts
// ServiceHighlights — no props, reads from services.ts
// TrustSection — no props, reads from site.ts
```

### Hook Interface

```typescript
// useContactForm
type UseContactFormReturn = {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isSubmitted: boolean;
  handleChange: (field: keyof ContactFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
}
```

## Data Models

### Service

```typescript
type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
}
```

Example data (`src/data/services.ts`):

```typescript
export const services: Service[] = [
  {
    id: 'grasslattur',
    name: 'Grassláttur',
    slug: 'grasslattur',
    shortDescription: 'Reglubundinn grassláttur fyrir fallegan garð.',
    longDescription: 'Við sjáum um grasslátt á öllum tegundum grasflata...',
  },
  {
    id: 'bedahreinsun',
    name: 'Beðahreinsun',
    slug: 'bedahreinsun',
    shortDescription: 'Hreinsun og umhirða blómabeða.',
    longDescription: 'Fagleg beðahreinsun sem heldur garðinum snyrtilegum...',
  },
  {
    id: 'trjaklippingar',
    name: 'Trjáklippingar',
    slug: 'trjaklippingar',
    shortDescription: 'Klipping og snyrting trjáa og runna.',
    longDescription: 'Trjáklippingar og runnasnyrting til að halda garðinum...',
  },
  {
    id: 'almenn-gardhirda',
    name: 'Almenn garðhirða',
    slug: 'almenn-gardhirda',
    shortDescription: 'Heildarþjónusta fyrir garðinn þinn.',
    longDescription: 'Almenn garðhirða sem nær yfir allt sem þarf...',
  },
];
```

### Site Data

```typescript
type NavItem = {
  label: string;
  path: string;
}

type PageMeta = {
  title: string;
  description: string;
}

type SiteData = {
  companyName: string;
  phone: string;
  email: string;
  navigation: NavItem[];
  pages: Record<string, PageMeta>;
}
```

### Contact Form

```typescript
type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>
```

### Validation Functions (Pure)

```typescript
// src/lib/validators.ts

/** Returns error message string or null if valid */
function validateRequired(value: string): string | null

/** Returns error message string or null if valid email format */
function validateEmail(email: string): string | null

/** Validates entire contact form, returns object with error messages for invalid fields */
function validateContactForm(data: ContactFormData): ContactFormErrors
```

### Design Tokens (CSS Custom Properties)

```css
:root {
  --color-primary: oklch(0.35 0.08 145);       /* Deep forest green */
  --color-primary-light: oklch(0.45 0.10 145); /* Lighter green for hover */
  --color-secondary: oklch(0.40 0.05 60);      /* Warm earth brown */
  --color-accent: oklch(0.55 0.15 140);        /* Fresh leaf green */
  --color-surface: oklch(0.97 0.005 90);       /* Warm off-white */
  --color-surface-alt: oklch(0.94 0.01 90);    /* Slightly darker surface */
  --color-text: oklch(0.25 0.02 60);           /* Dark charcoal */
  --color-text-muted: oklch(0.45 0.02 60);     /* Muted text */
  --color-border: oklch(0.85 0.01 90);         /* Subtle border */
  --color-error: oklch(0.50 0.20 25);          /* Error red */
  --color-success: oklch(0.45 0.12 145);       /* Success green */
}
```

### Typography

| Role | Font | Weight | Usage |
| --- | --- | --- | --- |
| Display | Fraunces | 600, 700 | h1, h2, hero headline |
| Body | Work Sans | 400, 500 | Paragraphs, labels, nav |

Loaded via Google Fonts `<link>` in `index.html`. Tailwind config extends `fontFamily` with `display` and `body` keys.


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: ServiceCard renders service content

*For any* valid Service object and any variant ("compact" or "detailed"), rendering a ServiceCard should produce output containing the service name and the appropriate description (shortDescription for compact, longDescription for detailed).

**Validates: Requirements 5.2, 7.3**

### Property 2: FormField produces accessible markup

*For any* FormField rendered with a name, label, and optional error message: (a) the output contains a `<label>` element associated with the input via matching htmlFor/id attributes, and (b) when an error is present, the input has an `aria-describedby` attribute pointing to an element containing the error text.

**Validates: Requirements 9.3, 10.3**

### Property 3: Required field validation rejects empty inputs

*For any* ContactFormData where one or more required fields (name, email, message) contain only whitespace or are empty, `validateContactForm` shall return a non-null error message for each such field, and shall return no error for required fields that contain non-whitespace content.

**Validates: Requirements 10.1**

### Property 4: Email validation classifies formats correctly

*For any* string that does not conform to a valid email format (missing @, missing domain, invalid characters), `validateEmail` shall return a non-null error message. *For any* string that conforms to a valid email format (local@domain.tld), `validateEmail` shall return null.

**Validates: Requirements 10.2**

## Error Handling

### Contact Form Validation Errors

| Scenario | Behaviour |
| --- | --- |
| Empty required field (name, email, message) | Display Icelandic error message adjacent to field, linked via `aria-describedby` |
| Invalid email format | Display format hint (e.g., "Vinsamlegast sláðu inn gilt netfang") |
| All fields valid on submit | Show success message, clear form |
| Phone field empty | No error — phone is optional |
| Service type not selected | No error — service type is optional |

### Navigation Errors

| Scenario | Behaviour |
| --- | --- |
| Unknown route | Render NotFoundPage with friendly Icelandic message and link to home |
| Broken internal link | Should not occur — all links use React Router `<Link>` with paths from site.ts |

### Data Loading

No async data loading exists in this architecture. All content is imported statically from `src/data/` files at build time. There are no loading states, error boundaries for data fetching, or network failure scenarios to handle.

### Accessibility Error States

- Error messages use `role="alert"` or `aria-live="polite"` for screen reader announcement
- Focus moves to the first field with an error after failed form submission
- Error styling uses both colour AND an icon/text indicator (never colour alone)

## Testing Strategy

### Unit Tests (Vitest + React Testing Library)

Focus on specific examples and edge cases:

| Test Area | Examples |
| --- | --- |
| Route rendering | Each route renders correct page component |
| 404 handling | Unknown route shows NotFoundPage |
| Header nav links | All 4 labels present, correct hrefs |
| Footer content | Services summary, nav links, contact CTA present |
| ServiceCard rendering | Renders name + description for each variant |
| FormField accessibility | Label association, aria-required, aria-describedby |
| Contact form submission | Valid data shows success, invalid shows errors |
| Mobile menu toggle | Opens/closes on interaction |

### Property-Based Tests (fast-check + Vitest)

Validate universal properties across generated inputs. Minimum 100 iterations per property.

| Property | Test Description | Tag |
| --- | --- | --- |
| Property 1 | Generate random Service objects, render ServiceCard, verify content | Feature: smartgardar-website, Property 1: ServiceCard renders service content |
| Property 2 | Generate random FormField configs with/without errors, verify accessible markup | Feature: smartgardar-website, Property 2: FormField produces accessible markup |
| Property 3 | Generate random ContactFormData with various empty/filled required fields, verify errors | Feature: smartgardar-website, Property 3: Required field validation rejects empty inputs |
| Property 4 | Generate random valid/invalid email strings, verify validateEmail classification | Feature: smartgardar-website, Property 4: Email validation classifies formats correctly |

### Integration / Smoke Tests

| Test | Purpose |
| --- | --- |
| Production build | `npm run build` exits with code 0, no errors |
| All routes accessible | Each defined route renders without crash |
| Accessibility audit | axe-core scan on each page for WCAG AA violations |

### Test Configuration

- **Runner**: Vitest (already compatible with Vite config)
- **Component testing**: @testing-library/react
- **Property testing**: fast-check (lightweight, zero-dep PBT library)
- **Accessibility**: @axe-core/react or vitest-axe for automated checks
- **Minimum PBT iterations**: 100 per property test
