node-prototype-homepage
==============================

The HomeAway UX Prototype, with a Node backend.

This project adheres to the [Node Style Guide](http://github.wvrgroup.internal/ui-development/front-end-style-guide/blob/master/NODE.md).

[Code Documentation](http://github.wvrgroup.internal/pages/ux/node-prototype-homepage/) available via [JSDoc](http://usejsdoc.org/)

Owners
==============================

* John Smith <foo@homeaway.com>
* UX <ux>

Communications
==============================

Updates and release information will be announced at: <ux>

Development Process
==============================

This project uses the [HomeAway Makefile](http://h.a/makefile) to encode the steps necessary to build, run, and test this project, and to describe the environment necessary to be able to perform those steps.

See `targets.mk` for the full specification of what each task (such as `test` or `build`) entails.

See `properties.mk` for the specification of the build environment (a Docker container).

| Task                           | Command              |
|--------------------------------|----------------------|
| build                          | `make build`         |
| test                           | `make test`          |
| list project-specific commands | `make agent npm run` |


Bare-Metal Development
-------------------------

You may opt out of the [HomeAway Makefile](http://h.a/makefile)'s abstraction of the development environment & build process by simply *not running the `make` command*, and issuing `npm` commands directly.

You may opt out of the HomeAway Makefile's abstraction of the development environment by instructing it to [run its tasks on your local machine](http://github.wvrgroup.internal/devtools/Makefile#skip-the-build-agent), instead of in the project's Docker-based build agent:

	make raw <targets>

### Installation

	npm install

* Engine requirements: See `package.json`
* For release cutting & publishing you will need Artifactory NPM authentication.

### Usage

To test the project:

	npm test

To see a complete list of running tasks:

	npm run

Continuous Integration
==============================

This project has been instrumented with the [HomeAway Makefile](http://h.a/makefile) and should be able to be built by any CI system that can run `docker` and `make`.

TeamCity
-------------------------

This project can be configured for CI builds in HomeAway's TeamCity environment by creating a build configuration based on the [HomeAway Makefile Template](https://wiki.homeawaycorp.com/display/devtools/TeamCity+Root+Templates#TeamCityRootTemplates-HomeAwayMakefile).

### Configuration Parameters

You should update the following configuration parameters, once you create your build configuration:

#### one-liners

| Parameter Name                        | Value |
|---------------------------------------|-------|
| user.build.command.args.defaultBranch | test  |
| user.build.command.args.pullRequest   | test  |

#### artifacts.addtl.paths

	docs/reports/coverage/html/=>coverage.zip
	docs/reports/coverage/lcov/=>coverage
	docs/reports/unit/=>test
	docs/reports/style/=>style
	npm-debug.log

Updating this will ensure that your code audit reports (unit tests, style checks, and coverage checks) are displayed in the TeamCity WebUI.

**Note:** Not all NPM modules may end up producing all of these artifacts - that's OK.

#### junit.report.path

	docs/reports/unit/*.xml
	docs/reports/style/*.xml
	docs/reports/coverage/**/*.xml

Updating this will ensure that your build fails when you have test failures, and that TeamCity correctly identifies which test(s) failed.

**Note:** Not all NPM modules may end up producing all of these artifacts - that's OK.

Release process
==============================

1. Use the web interface at [h.a/cutnpm](http://h.a/cutnpm).
	* If you are using pre-release versioning, select a release of type `npm`.
	* If you are **not** using pre-release versioning, select a release of type `npm-scripts`.
2. Update the GitHub release with a summary changelog.
3. Email <ux> using the following template

    Subject:

        node-prototype-homepage X.Y.Z released

    Body:

        node-prototype-homepage X.Y.Z released

        Release notes can be found at:
        http://github.wvrgroup.internal/ux/node-prototype-homepage/releases/tag/vX.Y.Z

Contributing
==============================

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Local Development
==============================

1. Open Terminal and cd into the root directory.
2. Run `sudo ./init.sh` to run npm init tasks
3. Run `npm install`
4. Run `gulp nodemon` to start the server and listen for changes to server code
5. Open another terminal tab or window and cd into `src/client/`
6. Run `npm install` again
7. Run `npm run watch:all` to begin watching for changes to client code
