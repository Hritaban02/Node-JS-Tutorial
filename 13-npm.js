// npm calls the reusable code a package and a package is a folder that contains javascript code

// npm - global command, comes with code
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// After arrival of npx there is less need for setting up packages globally
// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// lodash is a utility library
// nodemon watches our files and restarts our app for us
// We will install it as a dev dependency
// npm i <packageName> -D or - -save-dev
// Dev Dependecies are used while creating the app but usually not in production

// npm run dev (look in package.json)


// To uninstall a package 
// npm uninstall <packageName>

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)