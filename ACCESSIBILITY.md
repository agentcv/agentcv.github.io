# Accessibility checklist (WCAG 2.2 AA)

Check every page against this list before pushing. Last full check: 2026-11-25 (all four pages, zero axe violations).

1. **Automated scan:** axe-core with WCAG 2.0/2.1/2.2 A and AA plus best practices, in light and dark mode. Zero violations.
2. **Keyboard:** Tab through each page. Skip link first and visible on focus, then the nav, then content. Every link and
   button shows a focus ring (3px accent outline).
3. **Structure:** one `h1` per page, `h2` per section, `h3` per step or card. Header, nav, main and footer landmarks.
   Step lists use `role="list"` because `list-style: none` hides list semantics in Safari.
4. **Contrast:** text 4.5:1, buttons and focus rings 3:1, in both color schemes (tokens in style.css).
5. **Small screens and zoom:** no sideways scrolling at 320px wide or 200% zoom. Long code and commands wrap.
6. **Targets:** buttons, nav and footer links at least 24px tall (inline text links are exempt).
7. **Live updates:** the copy-prompt status is a polite live region.
8. **Motion:** none, apart from smooth scrolling, which is off under Reduce Motion.
9. **Mobile menu (640px and narrower):** a real `<button>` with `aria-expanded` and `aria-controls`, 44 by 44px, shown as a hamburger
   icon with a visually hidden "Menu" label for screen readers. Escape closes it and returns focus to the button; clicking outside closes it. Without JavaScript the links
   simply stay visible.
10. **Feedback form:** every field has a visible label; the radio group has a legend; a missing summary shows an
    error in text (not color alone), sets `aria-invalid`, and moves focus to the field. The form opens a pre-filled
    GitHub issue and sends nothing itself.
