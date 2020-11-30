# Reproduction of bug

Steps to reproduce:

- `npm install`
- `cd subpackage`
- `npm install`
- `npm run build`

Open up the `rollup.config.js` and uncomment the `cwd` line. Run `npm run build` again
