HomeAway 360 project
==============================

The HomeAway 360 viewer Prototype, with a Node backend.


Bare-Metal Development
-------------------------

### Installation

	npm install

* Engine requirements: See `package.json`
* For release cutting & publishing you will need Artifactory NPM authentication.

Local Development
==============================

1. Open Terminal and cd into the root directory.
2. Run `npm install`
3. Run `gulp serve` to start the server and watch for changes to code
4. Run `gulp serve:test` to run tests
5. Run `gulp` to build prod webapp
66. Run `gulp serve:dist` to preview prod build