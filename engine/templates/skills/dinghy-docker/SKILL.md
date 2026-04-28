---
name: dinghy-docker
description: Build Docker images using Dinghy's docker build pipeline. Use when creating, modifying, or building Docker images with content-hashed tags, EJS templating, multi-arch support, and ordered multi-image builds.
argument-hint: [image name or description]
---

Build Docker images from a source directory. Each subdirectory is a separate
image. Supports optional EJS templating, content-hashed immutable tags,
multi-architecture builds, and ordered dependency chains.

## Workflow

1. **Configure `.dinghyrc`** for the project if not already done:
   ```
   DINGHY_DOCKER_BUILD_REPO=myorg/myproject
   DINGHY_DOCKER_SUPPORTED_ARCHS=arm64,amd64
   ```
   - `DINGHY_DOCKER_BUILD_REPO` — target Docker repository (avoids passing
     `--repo` on every build)
   - `DINGHY_DOCKER_SUPPORTED_ARCHS` — comma-separated list of architectures to
     enable multi-arch builds (e.g. `arm64,amd64`). When unset or `false`,
     builds are single-arch for the host only.

2. **Create the image directory** under the source folder (default:
   `docker/images/`). Use a numeric prefix to control build order if images
   depend on each other (e.g. `10-base/`, `20-app/`). The image name is
   extracted from the text after the first dash — `10-base` becomes `base`,
   `20-app` becomes `app`. Folders without a dash use the full name.

3. **Add a Dockerfile.ejs** — never hardcode version numbers in the Dockerfile.
   Instead, put all versions in `versions.json` and reference them as
   `<%= VERSION_* %>` in `Dockerfile.ejs`. Optionally add
   `Dockerfile.dockerignore`, `fs-root/`, or build hook scripts.

4. **Build** with `dinghy docker build` (all images) or
   `dinghy docker build <name>` (single image). Suggest next steps:
   ```
   Next steps:
   - `dinghy docker build`              — build all images
   - `dinghy docker build <name>`       — build a specific image
   - `dinghy docker build --dryrun`     — preview what would be built
   - `dinghy docker build --push`       — build and push to registry
   ```

## Image Directory Structure

Only a `Dockerfile` is required. Everything else is optional.

```
docker/images/
├── 10-base/
│   ├── Dockerfile                  # required (or Dockerfile.ejs)
│   ├── Dockerfile.ejs              # optional: EJS template → renders to Dockerfile
│   ├── Dockerfile.dockerignore     # optional: controls Docker build context
│   ├── versions.json               # recommended: all version numbers go here (VERSION_*)
│   ├── fs-root/                    # optional: files copied into container root
│   │   ├── usr/bin/my-script
│   │   └── etc/my-config.conf
│   ├── prebuild.sh                 # optional: runs before docker build
│   └── postbuild.sh                # optional: runs after docker build
├── 20-app/
│   └── Dockerfile
└── 30-worker/
    └── Dockerfile
```

| File                      | Required        | Purpose                                                                       |
| ------------------------- | --------------- | ----------------------------------------------------------------------------- |
| `Dockerfile`              | Yes (or `.ejs`) | Docker build definition                                                       |
| `Dockerfile.ejs`          | No              | EJS template — rendered to `Dockerfile` before build                          |
| `Dockerfile.dockerignore` | No              | Restricts Docker build context to specific paths                              |
| `versions.json`           | Recommended     | All version numbers belong here — available as `VERSION_KEY` in EJS templates |
| `fs-root/`                | No              | Directory tree copied into container (mirrors root filesystem)                |
| `prebuild.sh`             | No              | Shell script executed before `docker buildx build`                            |
| `postbuild.sh`            | No              | Shell script executed after build (runs even on failure)                      |

## Naming & Build Order

Subdirectories are sorted alphabetically and built in order. Use numeric
prefixes to control dependency chains:

```
10-base        → image name: base
15-yarn-base   → image name: yarn-base
40-site        → image name: site
```

Earlier images are built first and their tags become available as template
variables for later images (e.g. `DOCKER_IMAGE_BASE_TAG`).

## EJS Templating (Optional)

Files ending in `.ejs` are rendered with EJS before the build. The output
replaces the `.ejs` extension (e.g. `Dockerfile.ejs` → `Dockerfile`).

### Available Template Variables

| Variable                 | Source                                   | Example                     |
| ------------------------ | ---------------------------------------- | --------------------------- |
| `VERSION_*`              | `versions.json` entries (uppercased)     | `VERSION_DENO` → `2.6.4`    |
| `DOCKER_IMAGE_*_TAG`     | Calculated tag of previously built image | `DOCKER_IMAGE_BASE_TAG`     |
| `DOCKER_IMAGE_*_VERSION` | Version portion of image tag             | `DOCKER_IMAGE_BASE_VERSION` |
| `VERSION_RELEASE`        | Git commit version                       | `0.1.310-20260413-...`      |
| `VERSION_BASE`           | From `.base-version` file                |                             |
| Environment variables    | All `Deno.env` entries                   | `HOME`, `PATH`, etc.        |

The image key in variable names is the uppercased image name with dashes
replaced by underscores: `yarn-base` → `DOCKER_IMAGE_YARN_BASE_TAG`.

### Example: Dockerfile.ejs

```dockerfile
FROM denoland/deno:debian-<%= VERSION_DENO %>

RUN apt-get update && apt-get install -y git curl
COPY docker/images/10-base/fs-root /
```

### Example: versions.json

```json
{
  "deno": "2.6.4",
  "nodejs": "24.14.0"
}
```

## Image Tagging

Tags are content-hashed for immutability — identical source produces the same
tag, maximizing Docker layer reuse.

- **Standard images:** `{repo}:{name}-{md5hash}`
  - Example: `dinghydev/dinghy:base-83a999e1b7171df882f70c543d8e6f40`
- **Multi-arch tags:** `{tag}-linux-{arch}` per architecture, with a manifest
  combining them under the base tag

The hash covers all non-`.ejs` files in the image directory plus the base
version and any files explicitly included via `Dockerfile.dockerignore`.

## Multi-Architecture Support

Multi-arch is opt-in. Set `DINGHY_DOCKER_SUPPORTED_ARCHS` (e.g. `arm64,amd64`)
in `.dinghyrc` to enable it — `--multi-arch` then defaults to on and `--arch`
defaults to that list. When the env var is unset or `false`, builds are
single-arch for the host only.

- Each arch is built separately with `--platform linux/{arch}`
- If the Dockerfile contains `ARG BUILD_ARCH`, it is passed as a build arg
- A Docker manifest is created combining all arch variants

### Architecture-Aware Dockerfile Pattern

```dockerfile
ARG BUILD_ARCH=arm64
FROM my-base-image-linux-$BUILD_ARCH
ARG BUILD_ARCH

RUN if [ "$BUILD_ARCH" = "arm64" ]; then ARCH="aarch64"; else ARCH="x86_64"; fi \
    && curl "https://example.com/tool-${ARCH}.tar.gz" -o tool.tar.gz
```

## Build Options

```
dinghy docker build [image] [options]
```

| Option         | Default                                               | Description                                        |
| -------------- | ----------------------------------------------------- | -------------------------------------------------- |
| `--source`     | `docker/images`                                       | Source folder containing image subdirectories      |
| `--repo`       | `DINGHY_DOCKER_BUILD_REPO`                            | Target Docker repository (set in `.dinghyrc`)      |
| `--push`       | `false`                                               | Push built images to registry (auto-enabled in CI) |
| `--skip-local` | `false`                                               | Skip build if image exists locally                 |
| `--multi-arch` | `false` (true if `DINGHY_DOCKER_SUPPORTED_ARCHS` set) | Build for multiple architectures                   |
| `--dryrun`     | `false`                                               | Preview builds without executing                   |
| `--arch`       | host arch (or `DINGHY_DOCKER_SUPPORTED_ARCHS` if set) | Architectures to build (multiple values)           |

If no `image` argument is given, all images in the source folder are built.

## Patterns from Sample Images

Reference: `/Users/guo/github/dinghydev/dinghy/docker/images/`

### Minimal Image (10-base)

Plain Dockerfile.ejs with FROM, RUN, and COPY from fs-root:

```dockerfile
FROM denoland/deno:debian-<%= VERSION_DENO %>

RUN apt-get update && apt-get install -y git curl jq openssh-client
COPY docker/images/10-base/fs-root /
```

### Chained Image (40-site)

Depends on a previously built image using template variable:

```dockerfile
ARG BUILD_ARCH=arm64
FROM <%= DOCKER_IMAGE_YARN_BASE_TAG %>-linux-$BUILD_ARCH

COPY docker/images/40-site/fs-root /
RUN cd /workspace/.dinghy/site && yarn install --immutable
```

### Multi-Stage Build (45-awscli)

Compiles a Go binary in one stage, copies to final image:

```dockerfile
ARG BUILD_ARCH=arm64
FROM golang:<%= VERSION_GOLANG %> AS builder
RUN curl -sLO https://github.com/.../archive/<%= VERSION_SSM %>.tar.gz \
    && tar xzf ... && cd ... && make release \
    && cp bin/session-manager-plugin /session-manager-plugin

FROM <%= DOCKER_IMAGE_BASE_TAG %>-linux-$BUILD_ARCH
ARG BUILD_ARCH
COPY --from=builder /session-manager-plugin /usr/bin/
```

### Build Context Control (Dockerfile.dockerignore)

Keeps Docker build context minimal:

```
# Ignore everything
**

# Allow only this image's fs-root
!/docker/images/10-base/fs-root/**
```

### Build Hooks (prebuild.sh / postbuild.sh)

Used for pre/post build path modifications:

```bash
#!/bin/bash
# prebuild.sh — fix paths for Docker build context
sed -i 's|../../core|file:///workspace/.dinghy/core|g' deno.jsonc
```

```bash
#!/bin/bash
# postbuild.sh — restore paths after build
sed -i 's|file:///workspace/.dinghy/core|../../core|g' deno.jsonc
```
