# Repository Instructions

Start with `PROJECT.md` and `.doctrine/project.json` before changing this
repository. They define the project goal, lifecycle, boundaries, public
surfaces, delivery model, and adoption gaps.

Use `SylphxAI/doctrine` for enterprise standards. Keep this repository
zero-knowledge about other products: repo-specific branding or behavior belongs
behind documented route parameters, themes, or a downstream product repo.

For control-plane-only changes, validate with:

```bash
python3 /Users/kyle/.doctrine/scripts/project-control-plane-audit.py --local . --fail-on-drift --json
git diff --check
```

For product code changes, also run the relevant Bun commands documented in
`package.json` and include generated-image smoke evidence when route or theme
behavior changes.
