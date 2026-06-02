AGENTS.md

Personal Website Repository Guidelines

This repository hosts a personal website published through GitHub Pages.

The primary objective is to make content updates, styling improvements, and navigation changes while preserving compatibility with GitHub Pages and minimizing maintenance burden.

---

Authoritative Documentation

Before changing framework-specific functionality, consult the official documentation.

GitHub Pages

https://docs.github.com/en/pages

Jekyll

https://jekyllrb.com/docs/

Jekyll Configuration

https://jekyllrb.com/docs/configuration/

Jekyll Collections

https://jekyllrb.com/docs/collections/

Jekyll Front Matter

https://jekyllrb.com/docs/front-matter/

GitHub Pages Supported Versions

https://pages.github.com/versions/

GitHub Pages Custom Domains

https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

Agent Mission

Agents should primarily perform:

- Add pages
- Add blog posts
- Update navigation
- Update styles
- Improve accessibility
- Improve SEO metadata
- Fix broken links
- Improve content structure

Agents should avoid introducing architectural changes unless explicitly requested.

---

Repository Assumptions

Assume:

GitHub Pages
Jekyll
Markdown content
Static site generation

If repository evidence contradicts these assumptions, follow the repository implementation instead.

---

Mandatory Workflow

Before making changes:

1. Identify the site framework.
2. Inspect existing conventions.
3. Reuse existing patterns.
4. Make the smallest possible change.
5. Verify the change does not require unsupported GitHub Pages features.

---

Architecture Rules

DO

- Reuse existing layouts.
- Reuse existing includes.
- Reuse existing collections.
- Reuse existing navigation structures.
- Reuse existing CSS organization.

DO NOT

- Replace Jekyll.
- Add React.
- Add Vue.
- Add Angular.
- Add Next.js.
- Add Nuxt.
- Add build tooling.
- Add unsupported plugins.

Unless explicitly requested.

---

Content Rules

Pages

Prefer:

about.md
projects.md
resume.md
contact.md

Use front matter:

---
layout: page
title: About
permalink: /about/
---

Always match repository conventions if different.

---

Blog Posts

Location:

_posts/

Naming:

YYYY-MM-DD-title.md

Example:

2026-06-01-banff-trip.md

Required front matter:

---
layout: post
title: Example Title
date: 2026-06-01
---

---

Navigation Rules

Before modifying navigation determine whether it is configured in:

_data/navigation.yml

or

_config.yml

or theme-specific files.

Prefer configuration-driven navigation.

Avoid editing layouts solely to add menu items.

---

Styling Rules

Preferred Order

1. Existing CSS overrides
2. Existing SCSS overrides
3. Theme customization settings
4. Layout modifications

Avoid editing vendor code.

---

Never Modify

Examples:

vendor/
.bundle/
node_modules/
_site/

Treat generated output as read-only.

---

Jekyll-Specific Rules

Collections

Before creating new content types:

Review:

https://jekyllrb.com/docs/collections/

Prefer existing collections.

Do not introduce new collections without clear justification.

---

Data Files

When content is structured:

Prefer:

_data/

Examples:

_data/projects.yml
_data/social.yml
_data/navigation.yml

Avoid hardcoding structured data into layouts.

---

Includes

Reusable content belongs in:

_includes/

Avoid duplicating markup.

---

Layouts

Layouts belong in:

_layouts/

Prefer extending existing layouts.

Avoid creating new layouts unless necessary.

---

SEO Requirements

Every new page should include:

title:
description:

When supported by the theme.

Prefer meaningful titles.

Avoid duplicate page titles.

---

Accessibility Requirements

All changes should preserve:

- Semantic HTML
- Keyboard accessibility
- Responsive design
- Image alt text
- Adequate contrast

Images must include descriptive alt text.

---

Performance Rules

Prefer:

- WebP images
- SVG icons
- Static content
- Existing dependencies

Avoid:

- Large JavaScript frameworks
- Heavy animations
- Additional CSS libraries

for small enhancements.

---

GitHub Pages Compatibility

Before introducing:

- Plugins
- Gems
- Build steps

Verify support:

https://pages.github.com/versions/

If unsupported:

DO NOT IMPLEMENT.

Instead propose a GitHub Actions workflow that builds the site before deployment.

---

Deployment Rules

Determine whether deployment uses:

Native GitHub Pages

Configured through repository settings.

or

GitHub Actions

Typical location:

.github/workflows/

When modifying deployment:

Preserve existing publishing behavior.

Do not change deployment targets.

---

Images and Assets

Store images in:

assets/images/

Store documents in:

assets/files/

Use descriptive filenames.

Example:

assets/images/banff-sunrise.webp

Avoid spaces in filenames.

---

Internal Links

Prefer:

[Projects](/projects/)

Avoid hardcoded absolute URLs for internal navigation.

---

Commit Scope

Each commit should address one concern.

Good:

Add projects page
Update navigation
Improve mobile menu spacing
Add Banff travel post

Bad:

Refactor site and redesign homepage and update deployment and rewrite posts

---

Pull Request Checklist

Before submitting:

- Site builds successfully.
- No broken links.
- Navigation works.
- Mobile layout works.
- Desktop layout works.
- Images render correctly.
- Metadata is present.
- GitHub Pages compatibility is preserved.

---

Decision Hierarchy

When uncertain, follow this order:

1. Existing repository patterns
2. Official Jekyll documentation
3. Official GitHub Pages documentation
4. Theme documentation
5. Minimal-change principle

The repository owner's content and publishing workflow always take priority over framework preferences.