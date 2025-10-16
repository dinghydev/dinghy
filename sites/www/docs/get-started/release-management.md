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

We have github action based workflow to perform the release:

<a href='https://github.com/dinghydev/dinghy/actions/workflows/release.yml'><img width='117' height='20' src='https://github.com/dinghydev/dinghy/actions/workflows/release.yml/badge.svg'/></a>

The release will be triggered

1. automatically when last commit has `[release]` keyword
2. or manually on demand
