# Requirements Document

## Introduction

Smartgarðar is a multi-page marketing website for an Icelandic gardening and garden maintenance company. The website presents the company's services (grassláttur, beðahreinsun, trjáklippingar, almenn garðhirða), builds trust with potential customers, and provides a clear path to contact the company. The site is built with Vite + React + TypeScript + TailwindCSS, uses React Router for page navigation, and all customer-facing copy is in Icelandic.

## Glossary

- **Website**: The Smartgarðar multi-page marketing website application
- **Router**: The React Router instance managing client-side page navigation
- **Header**: The persistent top navigation component visible on all pages
- **Footer**: The persistent bottom section visible on all pages
- **Hero_Section**: The prominent introductory section on the home page
- **Service_Card**: A visual component displaying a single service offering
- **Contact_Form**: The inquiry form on the contact page for customer messages
- **Validator**: The client-side form validation logic for the Contact_Form
- **Services_Data**: The centralised data file (`src/data/services.ts`) containing all service information
- **Site_Data**: The centralised data file (`src/data/site.ts`) containing reusable site-wide content

## Requirements

### Requirement 1: Multi-Page Routing

**User Story:** As a visitor, I want to navigate between distinct pages, so that I can find information about services, the company, and how to contact Smartgarðar.

#### Acceptance Criteria

1. THE Router SHALL provide navigation between four pages: Forsíða (home), Þjónusta (services), Um okkur (about), and Hafðu samband (contact)
2. WHEN a visitor navigates to a page, THE Website SHALL update the browser URL to reflect the current page path
3. WHEN a visitor accesses a direct URL for any page, THE Router SHALL render the correct page content without requiring navigation from the home page
4. WHEN a visitor navigates to an undefined route, THE Router SHALL display a 404 page with a link back to the home page

### Requirement 2: Header Navigation

**User Story:** As a visitor, I want a persistent header with navigation links, so that I can move between pages from any location on the site.

#### Acceptance Criteria

1. THE Header SHALL display the Smartgarðar logo or company name as a link to the home page
2. THE Header SHALL display navigation links labelled: Forsíða, Þjónusta, Um okkur, Hafðu samband
3. THE Header SHALL include a prominent contact button visually distinct from other navigation links
4. THE Header SHALL remain visible at the top of every page
5. WHEN the viewport width is below 768px, THE Header SHALL collapse navigation links into a mobile menu toggle
6. WHEN a visitor activates the mobile menu toggle, THE Header SHALL reveal the full navigation link list

### Requirement 3: Footer

**User Story:** As a visitor, I want a footer with summary information, so that I can quickly access services, navigation, and contact options from the bottom of any page.

#### Acceptance Criteria

1. THE Footer SHALL display a summary of services offered by Smartgarðar
2. THE Footer SHALL display navigation links to all pages
3. THE Footer SHALL include a call-to-action linking to the contact page
4. THE Footer SHALL remain visible at the bottom of every page

### Requirement 4: Home Page — Hero Section

**User Story:** As a visitor, I want a clear hero section on the home page, so that I immediately understand what Smartgarðar offers.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a headline communicating Smartgarðar's core value proposition in Icelandic
2. THE Hero_Section SHALL display a short explanatory paragraph describing the company's services
3. THE Hero_Section SHALL include a primary call-to-action button linking to the contact page
4. THE Hero_Section SHALL occupy the full viewport width and use a visually prominent layout

### Requirement 5: Home Page — Service Highlights

**User Story:** As a visitor, I want to see the main services highlighted on the home page, so that I can quickly understand what Smartgarðar provides without navigating to the services page.

#### Acceptance Criteria

1. THE Website SHALL display service highlight cards on the home page for: Grassláttur, Beðahreinsun, Trjáklippingar, and Almenn garðhirða
2. WHEN a visitor views a service highlight card, THE Website SHALL display the service name and a short description in Icelandic
3. THE Website SHALL source all service highlight content from Services_Data

### Requirement 6: Home Page — Trust Section

**User Story:** As a visitor, I want to see trust-building content on the home page, so that I feel confident choosing Smartgarðar.

#### Acceptance Criteria

1. THE Website SHALL display a trust-building section on the home page communicating reliability, professionalism, or local expertise
2. THE Website SHALL present trust content in Icelandic with a professional and friendly tone

### Requirement 7: Services Page

**User Story:** As a visitor, I want a dedicated services page, so that I can read detailed descriptions of each service Smartgarðar offers.

#### Acceptance Criteria

1. THE Website SHALL display a dedicated services page at the /thjonusta route
2. THE Website SHALL display a section or card for each service: Grassláttur, Beðahreinsun, Trjáklippingar, and Almenn garðhirða
3. WHEN a visitor views a service section, THE Website SHALL display the service name and a detailed description in Icelandic
4. THE Website SHALL source all service page content from Services_Data

### Requirement 8: About Page

**User Story:** As a visitor, I want an about page, so that I can learn about Smartgarðar as a company.

#### Acceptance Criteria

1. THE Website SHALL display a dedicated about page at the /um-okkur route
2. THE Website SHALL present Smartgarðar as a local, professional, and reliable gardening company
3. THE Website SHALL use a friendly and professional tone in Icelandic

### Requirement 9: Contact Page — Form

**User Story:** As a visitor, I want a contact form, so that I can send an inquiry to Smartgarðar.

#### Acceptance Criteria

1. THE Website SHALL display a contact form at the /hafdu-samband route
2. THE Contact_Form SHALL include fields for: Name, Phone, Email, Service type, and Message
3. THE Contact_Form SHALL associate a visible label element with each input field
4. THE Contact_Form SHALL mark Name, Email, and Message fields as required using `aria-required="true"` and a visible indicator
5. WHEN a visitor selects a service type, THE Contact_Form SHALL present the available services as selectable options sourced from Services_Data

### Requirement 10: Contact Page — Validation

**User Story:** As a visitor, I want immediate feedback on form errors, so that I can correct mistakes before submitting.

#### Acceptance Criteria

1. WHEN a visitor submits the Contact_Form with empty required fields, THE Validator SHALL display an error message adjacent to each empty required field
2. WHEN a visitor enters an invalid email format, THE Validator SHALL display an error message indicating the expected format
3. THE Validator SHALL link each error message to its corresponding field using `aria-describedby`
4. WHEN all required fields contain valid data and the visitor submits the form, THE Contact_Form SHALL display a success confirmation message in Icelandic

### Requirement 11: Responsive Layout

**User Story:** As a visitor on any device, I want the website to adapt to my screen size, so that I can read and navigate comfortably.

#### Acceptance Criteria

1. THE Website SHALL use a mobile-first responsive layout that adapts to viewport widths from 320px upward
2. WHEN the viewport width is below 768px, THE Website SHALL stack content vertically and use full-width sections
3. WHEN the viewport width is 768px or above, THE Website SHALL use multi-column layouts where appropriate

### Requirement 12: Accessibility

**User Story:** As a visitor using assistive technology, I want the website to follow accessibility standards, so that I can navigate and interact with all content.

#### Acceptance Criteria

1. THE Website SHALL use semantic HTML elements including `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`
2. THE Website SHALL maintain a logical heading hierarchy (h1 through h3) on every page
3. THE Website SHALL ensure all interactive elements are operable via keyboard navigation
4. THE Website SHALL provide visible focus indicators on all focusable elements
5. THE Website SHALL ensure text colour contrast meets WCAG AA minimum ratio of 4.5:1 for normal text

### Requirement 13: SEO Basics

**User Story:** As the business owner, I want the website to have good SEO fundamentals, so that potential customers can find Smartgarðar through search engines.

#### Acceptance Criteria

1. THE Website SHALL set a unique, descriptive `<title>` element for each page in Icelandic
2. THE Website SHALL include a `<meta name="description">` tag with service-focused content on each page
3. THE Website SHALL use heading elements (h1, h2, h3) with meaningful, keyword-relevant text in Icelandic

### Requirement 14: Centralised Content Data

**User Story:** As a developer, I want service and site content stored in dedicated data files, so that content changes require editing only one location.

#### Acceptance Criteria

1. THE Website SHALL store all service information (names, descriptions) in Services_Data at `src/data/services.ts`
2. THE Website SHALL store reusable site-wide content (company name, contact details, navigation labels) in Site_Data at `src/data/site.ts`
3. WHEN a component displays service or site content, THE Website SHALL read the content from Services_Data or Site_Data rather than using inline strings

### Requirement 15: Design Direction

**User Story:** As a visitor, I want the website to feel clean, modern, and professional, so that I trust Smartgarðar as a credible business.

#### Acceptance Criteria

1. THE Website SHALL use a colour palette inspired by natural, garden-related tones (greens, earth tones, fresh neutrals)
2. THE Website SHALL use generous whitespace between sections for strong readability
3. THE Website SHALL use a distinctive font pairing (display font for headings, body font for text) that avoids generic defaults
4. THE Website SHALL present a polished, intentionally designed appearance distinct from a default Vite template

### Requirement 16: Performance and Lightweight UI

**User Story:** As a visitor, I want the website to load quickly, so that I can access information without delay.

#### Acceptance Criteria

1. THE Website SHALL avoid unnecessary third-party dependencies beyond the approved stack (Vite, React, TypeScript, TailwindCSS, React Router)
2. THE Website SHALL produce a production build with no console errors or warnings
3. THE Website SHALL render meaningful content without requiring JavaScript-heavy loading sequences
