---
sidebar_position: 70
---

# Release Management

## Semantic versioning

The project follow [Semantic Versioning](https://semver.org/). Will

1. increase `major` version when incompatible API changes.
2. increase `minor` version when significant backward compatible feature
   introduced
3. `patch` version is the number of commits on the git branch where release
   happens

## Immutable release version

A release version is generated based on git commit as:

```sh
MAJOR.MINOR.COMMIT_COUNT-YYYYMMDD-HHmmss-COMMIT_SHORT_HASH
```

e.g. `0.1.143-20250916-182808-228bd315`

`MAJOR.MINOR` is read from
[.base-version](https://github.com/dinghydev/dinghy/blob/main/.base-version)
file.

:::info[Immutable]

The immutable nature of versioning guarantees that once a version is released,
it can never be changed. Any change will result a different release.

:::

## Release workflow

<a href='https://github.com/dinghydev/dinghy/actions/workflows/release-runtime.yml'><img width='117' height='20' src='https://github.com/dinghydev/dinghy/actions/workflows/release-runtime.yml/badge.svg'/></a>

The github
[release-runtime](https://github.com/dinghydev/dinghy/actions/workflows/release-runtime.yml)
action based workflow to perform the release of runtime. The release will be
triggered:

1. automatically when last commit has `[release]` keyword
2. or manually on demand

This documentation site is automatically released whenever changes are made in
the `sites` directory.

## Static code analysis

<a href='https://github.com/dinghydev/dinghy/actions/workflows/verification.yml'><img width='117' height='20' src='https://github.com/dinghydev/dinghy/actions/workflows/verification.yml/badge.svg'/></a>

The github
[verification](https://github.com/dinghydev/dinghy/actions/workflows/verification.yml)
action will perform static code analsys on every push to ensure the code base in
good status:

1. [Render examples](https://github.com/dinghydev/dinghy/blob/main/tasks/src/render-examples.ts)
1. [Check projects](https://github.com/dinghydev/dinghy/blob/main/tasks/src/check-projects.ts)
   which will:
   1. Run `deno check`
   2. Run `deno fmt`
   3. Run `deno lint`
   4. Generate docs from source code
   5. At the end, it will run `git diff` which will fail the action if any
      change found
