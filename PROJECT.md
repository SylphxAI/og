# og

`og` is an active application/tooling repository for generating Open Graph
images and social preview banners from URL parameters. It owns the image
generation service, theme definitions, route contract, and deployment metadata
needed to publish the generator as an independent product surface.

## Lifecycle And Layer

- Lifecycle: `active`
- Layer: `application`

## Goals

- Generate GitHub-oriented Open Graph images from documented URL parameters.
- Keep theme rendering, route behavior, and package metadata coherent in this
  repository.
- Publish only documented image-generation and deployment surfaces to consumers.

## Non-Goals

- Own enterprise doctrine, org rulesets, or shared CI/release policy.
- Own GitHub repository data semantics beyond input rendered into an image.
- Add product-specific banner behavior for another repository without making it
  an explicit route parameter or documented theme capability.

## Boundaries

This repository owns the URL-driven image generator, the bundled themes, and the
release/deployment wiring for that generator. It does not own downstream product
branding strategy, central release workflows, or another product's repo-specific
marketing copy.

## Public Surfaces

- `README.md` documents the generator contract.
- `index.ts` exposes the HTTP route behavior.
- `themes.ts` defines supported theme rendering.
- `package.json` describes the Bun package and commands.
- `.github/workflows/release.yml` calls the central release workflow.
- `.doctrine/project.json` is the machine-readable project manifest.

## Delivery

Pull requests currently have no repo-local CI declaration. Main-branch release
handling is delegated to the central reusable workflow. Production proof must
include deployment/readback or generated-image smoke evidence for the changed
route/theme behavior.

The authoritative control-plane record is `.doctrine/project.json`.
