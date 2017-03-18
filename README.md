# chewie-pics

You can use npm to install [other package managers](https://www.npmjs.com/package/bower)

You can use npm to install [programming languages](https://www.npmjs.com/package/elm)

Now, you can use npm to install [pictures of my dog](https://www.npmjs.com/package/chewie-pics)

## Usage

Use [npm-assets](https://www.npmjs.com/package/npm-assets) in your build pipeline
to copy the images into your project.

Ex) `node_modules/npm-assets/bin/npm-assets assets/images` to copy them to `assets/images`

Then to get a random image:

```
var chewiePics = require('chewie-pics');

var path = 'assets/images/' + chewiePics.random();
// path will be like 'assets/images/chewie12.jpg'
```
