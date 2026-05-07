# Implementation Plan: Smartgarðar Website

## Overview

Build a multi-page marketing website for Smartgarðar using Vite + React + TypeScript + TailwindCSS + React Router. Implementation proceeds from foundational setup (dependencies, config, types, data) through core layout and pages, to form logic and testing.

## Tasks

- [x] 1. Project setup and configuration
  - [x] 1.1 Install dependencies (react-router-dom, tailwindcss, postcss, autoprefixer)
    - Run `npm install react-router-dom` and `npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer`
    - _Requirements: 1.1, 15.1, 16.1_ | _Effort: 30min_

  - [x] 1.2 Configure TailwindCSS with design tokens
    - Add Tailwind directives to `src/index.css`
    - Define CSS custom properties for oklch colour palette (--color-primary, --color-surface, etc.)
    - Extend Tailwind config with `fontFamily` keys for `display` (Fraunces) and `body` (Work Sans)
    - Configure `postcss.config.js` with tailwindcss and autoprefixer plugins
    - _Requirements: 15.1, 15.2, 15.3_ | _Effort: 30min_

  - [x] 1.3 Add Google Fonts link to index.html
    - Add `<link>` elements for Fraunces (600, 700) and Work Sans (400, 500) from Google Fonts
    - Update `<html lang="is">` for Icelandic language
    - _Requirements: 15.3_ | _Effort: 30min_

  - [x] 1.4 Create TypeScript type definitions
    - Create `src/types/service.ts` with `Service` type
    - Create `src/types/contact.ts` with `ContactFormData` and `ContactFormErrors` types
    - Create `src/types/site.ts` with `NavItem`, `PageMeta`, and `SiteData` types
    - _Requirements: 14.1, 14.2_ | _Effort: 30min_

  - [x] 1.5 Create utility modules
    - Create `src/lib/cn.ts` with className merge utility
    - Create `src/lib/validators.ts` with `validateRequired`, `validateEmail`, and `validateContactForm` functions
    - _Requirements: 10.1, 10.2_ | _Effort: 30min_

  - [x] 1.6 Create centralised data files
    - Create `src/data/services.ts` with all four services (grassláttur, beðahreinsun, trjáklippingar, almenn garðhirða)
    - Create `src/data/site.ts` with company name, phone, email, navigation items, and page meta (title + description per page)
    - _Requirements: 14.1, 14.2, 14.3, 13.1, 13.2_ | _Effort: 30min_

- [ ] 2. Checkpoint - Verify foundation
  - Ensure TypeScript compiles without errors, all types and data files are consistent, ask the user if questions arise.

- [x] 3. Layout and routing
  - [x] 3.1 Set up React Router with BrowserRouter
    - Wrap app in `BrowserRouter` in `src/main.tsx`
    - Define route map in `src/App.tsx` with paths: `/`, `/thjonusta`, `/um-okkur`, `/hafdu-samband`, `*`
    - Create placeholder page components to verify routing works
    - _Requirements: 1.1, 1.2, 1.3, 1.4_ | _Effort: 30min_

  - [x] 3.2 Implement Button component
    - Create `src/components/ui/Button.tsx` with variant support (primary, secondary, outline)
    - Support `href` prop rendering as React Router `<Link>`, and `type` prop for form buttons
    - Include size variants (sm, md, lg) and className merging via cn()
    - _Requirements: 4.3, 15.4_ | _Effort: 30min_

  - [x] 3.3 Implement Header component with mobile menu
    - Create `src/components/layout/Header.tsx` with company name/logo linking to home
    - Display navigation links (Forsíða, Þjónusta, Um okkur, Hafðu samband) from site.ts
    - Include prominent contact CTA button visually distinct from nav links
    - Create `src/components/layout/MobileMenu.tsx` with collapsible navigation for viewports below 768px
    - Implement mobile menu toggle button with accessible label
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 12.1, 12.3_ | _Effort: 1h_

  - [x] 3.4 Implement Footer component
    - Create `src/components/layout/Footer.tsx` reading from services.ts and site.ts
    - Display services summary, navigation links, and contact CTA
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 14.3_ | _Effort: 30min_

  - [x] 3.5 Implement Layout wrapper component
    - Create `src/components/layout/Layout.tsx` wrapping Header + `<main>` + Footer
    - Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
    - Wrap all routes with Layout in App.tsx
    - _Requirements: 12.1, 2.4, 3.4_ | _Effort: 30min_

- [ ] 4. Checkpoint - Verify layout and navigation
  - Ensure all routes render with Header and Footer, mobile menu toggles correctly, navigation links work, ask the user if questions arise.

- [x] 5. Home page sections
  - [x] 5.1 Implement HeroSection component
    - Create `src/components/sections/HeroSection.tsx` with headline, paragraph, and CTA button linking to /hafdu-samband
    - Full viewport width, visually prominent layout with generous whitespace
    - Content in Icelandic communicating Smartgarðar's value proposition
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 15.2_ | _Effort: 30min_

  - [x] 5.2 Implement ServiceCard component
    - Create `src/components/ui/ServiceCard.tsx` with compact and detailed variants
    - Compact variant shows service name + shortDescription
    - Detailed variant shows service name + longDescription
    - _Requirements: 5.2, 7.3_ | _Effort: 30min_

  - [x] 5.3 Implement ServiceHighlights component
    - Create `src/components/sections/ServiceHighlights.tsx` rendering 4 ServiceCards in a responsive grid
    - Source content from services.ts
    - _Requirements: 5.1, 5.2, 5.3, 14.3_ | _Effort: 30min_

  - [x] 5.4 Implement TrustSection component
    - Create `src/components/sections/TrustSection.tsx` with trust-building content in Icelandic
    - Communicate reliability, professionalism, and local expertise
    - _Requirements: 6.1, 6.2_ | _Effort: 30min_

  - [x] 5.5 Assemble HomePage
    - Create `src/pages/HomePage.tsx` composing HeroSection + ServiceHighlights + TrustSection
    - Set page title and meta description via document.title or a useEffect
    - Ensure logical heading hierarchy (h1 in hero, h2 for sections)
    - _Requirements: 4.1, 5.1, 6.1, 12.2, 13.1, 13.2, 13.3_ | _Effort: 30min_

- [x] 6. Services, About, and 404 pages
  - [x] 6.1 Implement ServicesPage
    - Create `src/pages/ServicesPage.tsx` displaying detailed ServiceCards for all four services
    - Source content from services.ts, use detailed variant
    - Set page title and meta description
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 13.1, 13.2, 14.3_ | _Effort: 30min_

  - [x] 6.2 Implement AboutPage
    - Create `src/pages/AboutPage.tsx` presenting Smartgarðar as local, professional, reliable
    - Friendly and professional tone in Icelandic
    - Set page title and meta description
    - _Requirements: 8.1, 8.2, 8.3, 13.1, 13.2_ | _Effort: 30min_

  - [x] 6.3 Implement NotFoundPage
    - Create `src/pages/NotFoundPage.tsx` with friendly Icelandic 404 message and link back to home
    - _Requirements: 1.4_ | _Effort: 30min_

- [x] 7. Contact page and form logic
  - [x] 7.1 Implement FormField component
    - Create `src/components/ui/FormField.tsx` with label + input/textarea/select + error message
    - Associate label with input via matching htmlFor/id
    - Add `aria-required="true"` and visible indicator for required fields
    - Link error messages via `aria-describedby` when errors present
    - Support text, email, tel, textarea, and select input types
    - _Requirements: 9.3, 9.4, 10.3, 12.3_ | _Effort: 1h_

  - [x] 7.2 Implement SuccessMessage component
    - Create `src/components/ui/SuccessMessage.tsx` displaying confirmation in Icelandic
    - Use `role="alert"` or `aria-live="polite"` for screen reader announcement
    - _Requirements: 10.4_ | _Effort: 30min_

  - [x] 7.3 Implement useContactForm hook
    - Create `src/hooks/useContactForm.ts` managing form state, validation, and submission
    - Call `validateContactForm` on submit, set errors or show success
    - Expose formData, errors, isSubmitted, handleChange, handleSubmit, resetForm
    - Move focus to first error field on failed submission
    - _Requirements: 10.1, 10.2, 10.4_ | _Effort: 1h_

  - [x] 7.4 Implement ContactPage
    - Create `src/pages/ContactPage.tsx` with contact form using FormField components
    - Include fields: Name (required), Phone, Email (required), Service type (select from services.ts), Message (required)
    - Show SuccessMessage on successful submission
    - Set page title and meta description
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 10.4, 13.1, 13.2_ | _Effort: 1h_

- [ ] 8. Checkpoint - Verify all pages and form
  - Ensure all pages render correctly, form validation works (empty fields, invalid email), success message displays, ask the user if questions arise.

- [x] 9. Responsive layout and accessibility polish
  - [x] 9.1 Apply responsive styles across all pages
    - Ensure mobile-first layout from 320px upward
    - Stack content vertically below 768px, multi-column above 768px
    - Verify Header collapses to mobile menu below 768px
    - _Requirements: 11.1, 11.2, 11.3_ | _Effort: 1h_

  - [x] 9.2 Accessibility and keyboard navigation pass
    - Verify visible focus indicators on all focusable elements
    - Ensure all interactive elements are keyboard-operable
    - Verify heading hierarchy on every page (h1 → h2 → h3)
    - Confirm colour contrast meets WCAG AA (4.5:1 for normal text)
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_ | _Effort: 1h_

  - [x] 9.3 Clean up default Vite template content
    - Remove `src/App.css` default styles, `src/assets/react.svg`, `src/assets/vite.svg`
    - Ensure production build has no console errors or warnings
    - Verify the site looks polished and distinct from default Vite template
    - _Requirements: 15.4, 16.2_ | _Effort: 30min_

- [ ] 10. Testing setup and property-based tests
  - [x] 10.1 Set up Vitest and React Testing Library
    - Install vitest, @testing-library/react, @testing-library/jest-dom, jsdom, fast-check
    - Configure vitest in vite.config.ts with jsdom environment
    - _Requirements: 16.2_ | _Effort: 30min_

  - [ ] 10.2 Write property test for ServiceCard rendering (Property 1)
    - **Property 1: ServiceCard renders service content**
    - Generate random Service objects and variants, verify rendered output contains service name and appropriate description
    - **Validates: Requirements 5.2, 7.3**
    - _Effort: 1h_

  - [ ] 10.3 Write property test for FormField accessibility (Property 2)
    - **Property 2: FormField produces accessible markup**
    - Generate random FormField configs with/without errors, verify label association and aria-describedby
    - **Validates: Requirements 9.3, 10.3**
    - _Effort: 1h_

  - [ ] 10.4 Write property test for required field validation (Property 3)
    - **Property 3: Required field validation rejects empty inputs**
    - Generate random ContactFormData with various empty/filled required fields, verify validateContactForm returns correct errors
    - **Validates: Requirements 10.1**
    - _Effort: 1h_

  - [ ] 10.5 Write property test for email validation (Property 4)
    - **Property 4: Email validation classifies formats correctly**
    - Generate random valid/invalid email strings, verify validateEmail classification
    - **Validates: Requirements 10.2**
    - _Effort: 1h_

- [ ] 11. Final checkpoint - Production build verification
  - Run `npm run build` and confirm it exits with code 0, no errors or warnings. Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation between phases
- Property tests validate universal correctness properties from the design document
- All content must be in Icelandic as specified in requirements
- The contact form performs client-side validation only — no backend submission
