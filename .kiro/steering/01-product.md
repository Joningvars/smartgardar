---
inclusion: always
---

# Product Overview

Smartgarðar is a company website for an Icelandic gardening and garden maintenance business.

Smartgarðar sér um almenna umhirðu garða og grasflata. Þjónustan felur meðal annars í sér grasslátt, beðahreinsun og trjáklippingar.

## Quick Decision Framework

Before implementing code, verify:

1. **Does the feature support the company website?** → Keep the site focused on presenting Smartgarðar, its services, and contact options.
2. **Is the content clear for potential customers?** → Use simple, direct language that explains what Smartgarðar does.
3. **Is the design professional and trustworthy?** → Prioritise a clean, natural, garden-related visual style.
4. **Does it help users contact Smartgarðar?** → Make phone, email, or contact form actions easy to find.
5. **Is the Icelandic copy correct and natural?** → The website should primarily use Icelandic unless otherwise requested.

## Domain Terms

| Term | Definition | Code Convention |
| ---- | ---------- | --------------- |
| `Service` | A gardening or maintenance service offered by Smartgarðar | `services`, `ServiceCard`, `serviceSections` |
| `Grassláttur` | Lawn mowing and grass cutting service | `grasslatturService` |
| `Beðahreinsun` | Cleaning and maintenance of flower beds or planting beds | `bedahreinsunService` |
| `Trjáklippingar` | Tree trimming and pruning service | `trjaklippingarService` |
| `ContactRequest` | A message or enquiry from a potential customer | `contactRequests`, `ContactForm` |
| `HeroSection` | Main landing section introducing Smartgarðar | `HeroSection` |
| `ServiceArea` | Geographic area where Smartgarðar offers services | `serviceAreas` |

## Feature Locations

| Feature | Logic | UI |
| ------- | ----- | -- |
| Homepage | `src/app/` or `src/pages/` | `src/components/sections/HeroSection` |
| Services | `src/lib/services/` | `src/components/services/` |
| Contact | `src/lib/contact/` | `src/components/contact/` |
| About Smartgarðar | Static content/config | `src/components/sections/AboutSection` |
| Navigation | Static config | `src/components/layout/` |
| Shared UI | `src/lib/` | `src/components/ui/` |

## Business Rules

| Rule | Implementation |
| ---- | -------------- |
| The website must clearly explain what Smartgarðar does | Include grassláttur, beðahreinsun, trjáklippingar, and general garden maintenance prominently |
| Contact actions must be easy to find | Show contact buttons or links in the hero, navigation, and footer |
| The site should feel local, professional, and trustworthy | Use clean layout, natural colours, garden imagery, and concise copy |
| Avoid overcomplicating the site | Prefer simple sections, readable text, and clear calls to action |
| Icelandic content should be prioritised | Use Icelandic labels, headings, and service descriptions by default |
| Forms must be simple and low-friction | Ask only for necessary contact details and the customer’s message |
| Do not invent unsupported services | Only mention services confirmed by the business unless explicitly added |

## Language

Primary language: Icelandic.

Use clear, natural Icelandic suitable for a local gardening company website.

Preferred terms:

- `Garðsláttur`
- `Beðahreinsun`
- `Trjáklippingar`
- `Almenn garðhirða`
- `Garðaþjónusta`
- `Hafðu samband`

Avoid overly formal or technical wording. The tone should be friendly, reliable, and professional.