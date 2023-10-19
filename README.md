# Test Next.js Barrel Tree Shaking

This is a 30 minute test. Non comprehensive.

## Original problem
Problem (observed 2022):
In a Next.js 12 project, importing from a barrel file was importing everything into the bundle instead of tree shaking. 

Solution: 
Mark barrel file packages as side-effect free in webpack config overrides, or in package.jsons.


## 2023 / this repo
Next 13.5.6 (2023) seems to have fixed the problem by default.

- Tested in a barrel file in single Next.js yarn project
- Tested in a barrel file in yarn workspaces monorepo setup
- Observed output of `next build` command in both cases for unused code, and found none

## Conclusion

While it's still possible there's edge cases depending on package manager, exact scenarios, other factors, it does appear barrel imports are tree shaken in Next.js 13.5.6 whether in monorepo or in single project.

