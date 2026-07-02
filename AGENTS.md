<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

---

# Project Overview

Project Name: CodiCare

This project is the foundation for a reusable website template that will be used for many future client websites.

Every engineering decision should prioritize:

- Maintainability
- Reusability
- Scalability
- Accessibility
- Performance

---

# Technology Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- pnpm
- Lucide React

Do not introduce additional dependencies unless absolutely necessary.

---

# Architecture Rules

- Follow component-based architecture.
- Keep components small and focused on a single responsibility.
- Reuse existing components whenever possible.
- Prefer composition over duplication.
- Do not duplicate business logic.
- Keep folder structure clean and consistent.
- Use descriptive component and variable names.

---

# React Rules

- Prefer Server Components by default.
- Only use "use client" when required.
- Avoid unnecessary state.
- Avoid unnecessary effects.
- Keep components readable.

---

# Code Quality

- Write production-ready code.
- Use strict TypeScript.
- Use semantic HTML.
- Follow accessibility best practices.
- Keep Tailwind classes clean and readable.
- Do not use inline styles.
- Avoid unnecessary wrappers.
- Avoid deprecated APIs.
- Do not hardcode repeated values.

---

# UI Rules

The website should feel:

- Professional
- Modern
- Clean
- Minimal
- Trustworthy
- Enterprise-grade

Avoid flashy animations, glassmorphism, excessive gradients, and over-designed interfaces.

---

# Workflow

Before creating a new component:

1. Check if an existing component can be reused.
2. Follow the existing project architecture.
3. Keep implementation simple.
4. Explain important architectural decisions briefly.
5. Clearly list created or modified files.

Never make breaking architectural changes without explaining why.

<!-- END:nextjs-agent-rules -->


