# Implementation Plan - Full UI Redesign (Responsive Typography & Layout)

Redesign the DogPow (DPOW) website's typography and layout system to be fully fluid and responsive using modern CSS techniques (`clamp()`, CSS Grid). This ensures a "premium" feel on everything from small mobile devices (360dp) to large desktop monitors.

## User Review Required

> [!IMPORTANT]
> **Fluid Typography**: I am moving away from static Tailwind classes (like `text-8xl`) to a fluid system. Headings will automatically scale perfectly based on the viewport width without "jumping" at breakpoints.
> **Layout Rhythm**: I will implement a global spacing system to ensure consistent "breathing room" across all sections.

## Proposed Changes

### 1. Foundation: Fluid Design System
#### [MODIFY] [index.css](file:///I:/AndroidStudioProjects2/DogePow/web/src/index.css)
- Define fluid variables for typography:
  - `--text-display`: Hero headings (scales from ~40px to ~120px).
  - `--text-h2`: Section headings.
  - `--text-h3`: Card/Sub-headings.
  - `--text-body`: Standard text.
- Define fluid spacing:
  - `--section-gap`: Vertical padding between sections.
  - `--container-px`: Horizontal padding for the container.

### 2. Hero Section: Premium Layout & Visuals
#### [MODIFY] [Hero.tsx](file:///I:/AndroidStudioProjects2/DogePow/web/src/sections/Hero.tsx)
- Apply the new fluid headings.
- **Mascot Integration**: Add a stylized, animated "DogPow Core" visual (glassmorphism sphere with amber glow) to act as a placeholder for the mascot.
- Compact the layout further for mobile while maintaining desktop elegance.

### 3. Navigation: Balanced Scaling
#### [MODIFY] [Navbar.tsx](file:///I:/AndroidStudioProjects2/DogePow/web/src/components/Navbar.tsx)
- Use the fluid typography for the logo and links.
- Refine the mobile menu transition to be faster and "lighter".

### 4. Global Content Refinement
#### [MODIFY] all sections ([Partners.tsx](file:///I:/AndroidStudioProjects2/DogePow/web/src/sections/Partners.tsx), [Roadmap.tsx](file:///I:/AndroidStudioProjects2/DogePow/web/src/sections/Roadmap.tsx), [Tokenomics.tsx](file:///I:/AndroidStudioProjects2/DogePow/web/src/sections/Tokenomics.tsx), etc.)
- Replace manual spacing with the new `.section-padding` and `.container-wide` utilities.
- Ensure all cards use consistent fluid sizes.

---

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no regression.

### Manual Verification
- **Visual Regression**: Test the website at:
  - 360px (Small Mobile)
  - 768px (Tablet)
  - 1440px (Desktop)
  - 2560px (4K)
- **Check Spacing**: Ensure vertical rhythm is consistent and not "crowded".
