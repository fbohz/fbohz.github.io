# RoastedRobots - A Blog by Felipe Bohorquez
Copyright© Felipe Bohorquez

## Deploying Changes to Github Pages

When latest changes pushed to `gh-pages` branch, then you need to build:

`npm run build`

Then deploy:

`npm run deploy`


## Tips

### Adding New Icon SVG

Find and copy SVG <path> [here](https://iconify.design/icon-sets/simple-icons/) and add to `Icon.js` as new conditional also you might have to add new option string in the `stackbit.yaml` file as well.