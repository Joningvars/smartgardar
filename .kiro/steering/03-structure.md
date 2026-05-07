---
inclusion: always
---

# Project Structure

Smartgarðar is a Vite + React marketing website for an Icelandic gardening company. Keep the structure simple, readable, and easy to maintain.

## Decision Tree: Where Does This Code Go?

Execute in order until you find a match:

```text
1. Is it the main app shell?
   → src/App.tsx

2. Is it a homepage section?
   → src/components/sections/

3. Is it a reusable UI component?
   → src/components/ui/

4. Is it layout/navigation/footer?
   → src/components/layout/

5. Is it service/company/contact content?
   → src/data/

6. Is it a custom hook?
   → src/hooks/

7. Is it a utility/helper function?
   → src/lib/

8. Is it a TypeScript type?
   → src/types/

9. Is it an image or static asset imported by React?
   → src/assets/

10. Is it a public static file like favicon, robots.txt, or social image?
   → public/