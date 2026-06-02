# Personal Website Repository Guidelines

This repository hosts a personal website published through GitHub Pages.

The primary objective is to make content updates, styling improvements, and navigation changes while preserving compatibility with GitHub Pages and minimizing maintenance burden.

## Authoritative Documentation

Before changing framework-specific functionality, consult the official documentation:

- [GitHub Pages](https://docs.github.com/en/pages)
- [Jekyll](https://jekyllrb.com/docs/)
- [Jekyll Configuration](https://jekyllrb.com/docs/configuration/)
- [Jekyll Collections](https://jekyllrb.com/docs/collections/)
- [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/)
- [GitHub Pages Supported Versions](https://pages.github.com/versions/)
- [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Agent Mission

Agents should primarily perform the following tasks:

- Add pages.
- Add blog posts.
- Update navigation.
- Update styles.
- Improve accessibility.
- Improve SEO metadata.
- Fix broken links.
- Improve content structure.

Agents should avoid introducing architectural changes unless explicitly requested.

## Repository Assumptions

Assume this repository uses:

- GitHub Pages.
- Jekyll.
- Markdown content.
- Static site generation.

If repository evidence contradicts these assumptions, follow the repository implementation instead.

## Mandatory Workflow

Before making changes:

1. Identify the site framework.
2. Inspect existing conventions.
3. Reuse existing patterns.
4. Make the smallest possible change.
5. Verify the change does not require unsupported GitHub Pages features.

## Architecture Rules

### Do

- Reuse existing layouts.
- Reuse existing includes.
- Reuse existing collections.
- Reuse existing navigation structures.
- Reuse existing CSS organization.

### Do Not

- Replace Jekyll.
- Add React.
- Add Vue.
- Add Angular.
- Add Next.js.
- Add Nuxt.
- Add build tooling.
- Add unsupported plugins.

Do not make these changes unless explicitly requested.

## Content Rules

### Pages

Prefer these page filenames:

- `about.md`
- `projects.md`
- `resume.md`
- `contact.md`

Use front matter like this:

```yaml
---
layout: page
title: About
permalink: /about/
---
```

Always match repository conventions if they differ.

### Blog Posts

Place posts in `_posts/`.

Name posts with the following pattern:

```text
YYYY-MM-DD-title.md
```

Example:

```text
2026-06-01-banff-trip.md
```

Use required front matter like this:

```yaml
---
layout: post
title: Example Title
date: 2026-06-01
---
```

## Navigation Rules

Before modifying navigation, determine whether it is configured in one of these locations:

- `_data/navigation.yml`
- `_config.yml`
- Theme-specific files.

Prefer configuration-driven navigation.

Avoid editing layouts solely to add menu items.

## Styling Rules

Use this preferred order:

1. Existing CSS overrides.
2. Existing SCSS overrides.
3. Theme customization settings.
4. Layout modifications.

Avoid editing vendor code.

## Never Modify

Treat generated output and dependency folders as read-only. Examples include:

- `vendor/`
- `.bundle/`
- `node_modules/`
- `_site/`

## Jekyll-Specific Rules

### Collections

Before creating new content types, review the [Jekyll collections documentation](https://jekyllrb.com/docs/collections/).

Prefer existing collections.

Do not introduce new collections without clear justification.

### Data Files

When content is structured, prefer `_data/`.

Examples:

- `_data/projects.yml`
- `_data/social.yml`
- `_data/navigation.yml`

Avoid hardcoding structured data into layouts.

### Includes

Reusable content belongs in `_includes/`.

Avoid duplicating markup.

### Layouts

Layouts belong in `_layouts/`.

Prefer extending existing layouts.

Avoid creating new layouts unless necessary.

## SEO Requirements

Every new page should include the following metadata when supported by the theme:

- `title`
- `description`

Prefer meaningful titles.

Avoid duplicate page titles.

## Accessibility Requirements

All changes should preserve:

- Semantic HTML.
- Keyboard accessibility.
- Responsive design.
- Image alt text.
- Adequate contrast.

Images must include descriptive alt text.

## Performance Rules

Prefer:

- WebP images.
- SVG icons.
- Static content.
- Existing dependencies.

Avoid the following for small enhancements:

- Large JavaScript frameworks.
- Heavy animations.
- Additional CSS libraries.

## GitHub Pages Compatibility

Before introducing any of the following, verify support in [GitHub Pages supported versions](https://pages.github.com/versions/):

- Plugins.
- Gems.
- Build steps.

If unsupported, do not implement the change. Instead, propose a GitHub Actions workflow that builds the site before deployment.

## Deployment Rules

Determine whether deployment uses one of these methods:

- Native GitHub Pages configured through repository settings.
- GitHub Actions, typically located in `.github/workflows/`.

When modifying deployment:

- Preserve existing publishing behavior.
- Do not change deployment targets.

## Images and Assets

Store images in `assets/images/`.

Store documents in `assets/files/`.

Use descriptive filenames.

Example:

```text
assets/images/banff-sunrise.webp
```

Avoid spaces in filenames.

## Internal Links

Prefer root-relative internal links, such as:

```markdown
[Projects](/projects/)
```

Avoid hardcoded absolute URLs for internal navigation.

## Commit Scope

Each commit should address one concern.

Good examples:

- Add projects page.
- Update navigation.
- Improve mobile menu spacing.
- Add Banff travel post.

Bad example:

- Refactor site, redesign homepage, update deployment, and rewrite posts.

## Pull Request Checklist

Before submitting:

- Site builds successfully.
- No broken links.
- Navigation works.
- Mobile layout works.
- Desktop layout works.
- Images render correctly.
- Metadata is present.
- GitHub Pages compatibility is preserved.

## Decision Hierarchy

When uncertain, follow this order:

1. Existing repository patterns.
2. Official Jekyll documentation.
3. Official GitHub Pages documentation.
4. Theme documentation.
5. Minimal-change principle.

The repository owner's content and publishing workflow always take priority over framework preferences.
