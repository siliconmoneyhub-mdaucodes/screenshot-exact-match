# UKEN clickable marketplace mockup

## Build
- Replace the placeholder at `/` with a warm editorial UKEN storefront and role-switching demo bar.
- Add hard-coded makers/products and client-only shopping interactions: browse, filter/sort, product details, saved items, bag count, and role switching.
- Add `/shop`, `/products/$id`, `/makers`, and `/our-story` pages; role switches lead to a clear role-appropriate demo home without authentication or backend.
- Use the requested brand palette and Cormorant Garamond / DM Sans, with category-led imagery and responsive layouts tuned for 375px.
- Add page-specific metadata and verify routing, tests, responsive rendering, and the primary shopping flow.

## Technical details
- Keep mock data in a dedicated front-end data module and share role, bag, and saved state through a lightweight React context mounted at the root.
- Use existing TanStack Start routing, semantic tokens in `src/styles.css`, and existing UI controls; no persistence or server functionality.
