const fs = require('fs');
fs.copyFileSync('./content.js', './dist/content.js');
fs.copyFileSync('./manifest.json', './dist/manifest.json');
console.log("Everething is copied to ./dist/ folder.");