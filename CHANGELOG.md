# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2017-08-01
### Added
- Add `enoent` option, to specify whether to throw, warn, or do nothing if the envfile was not found. The default is to warn if no path was specified (defaulting to `.env`), and throw if a path was explicitly specified.
- Add a basic Travis configuration.
- Add words to readme.

### Changed
- nvar will only warn and no longer throw an error by default when called in its simplest form (i.e. `require('nvar')()` without any arguments) and a `.env` envfile was not found.

## [1.0.3] - 2017-07-30
### Fixed
- Implement string argument shorthand that was advertised in readme but overlooked during development.

## [1.0.2] - 2017-07-30
### Added
- This changelog, with descriptions starting from v1.0.0.

## [1.0.1] - 2017-07-28
### Changed
- Minor touchup to Readme only.

## [1.0.0] - 2017-07-27
### Added
- Initial release. It supports:
  - Reading configuration from a file `path` (`./.env` by default), or directly passed in as `source`.
  - Assignment to any arbitrary `target` (`process.env` by default).
  - Parsing support for the following shell-isms:
    - Unquoted values
    - Optional 'export' prefixes.
    - Comments with `#`.
    - Single-quoted values (Strong quoting)
    - Double-quoted values (Weak quoting)
    - Backslash-newline line splitting
    - Backslash-escaping of special characters
    - Parameter expansion