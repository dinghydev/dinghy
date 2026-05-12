---
title: "Why React for Infrastructure as Code?"
description: "Terraform's HCL has no real abstraction. Modules help — until they don't. Dinghy's answer: render TypeScript / TSX into Terraform JSON using React's reconciler."
slug: why-react-for-iac
tags: [dinghy, react, terraform, iac, cdktf]
image: /assets/img/blog/cover-why-react.svg
draft: true
---

![Why React for IaC?](/assets/img/blog/cover-why-react.svg)

If you have ever maintained more than one Terraform environment, you have probably written the same resource block four or five times with slightly different inputs. HCL is fine as a configuration *format* — but as a *language*, it has barely any abstraction tools.

This is the story of how Dinghy ended up using **React** as its rendering engine for infrastructure code, and why that turned out to be a surprisingly good fit.

<!-- truncate -->

## The problem: Terraform

HCL is HashiCorp **Configuration** Language. The keyword is *configuration*: it describes resources, not behavior.

The consequence shows up the moment you try to scale:

- Two environments → duplicate every resource block
- Ten environments → ten copies to keep in sync
- A rename? Find-and-replace across the codebase

There is no inheritance, no real composition, no type system to lean on. You either copy-paste or you reach for modules.

## Modules help… until they don't

Modules are Terraform's official answer to abstraction, and they do help — for a while.

- Modules are heavyweight: a separate folder, separate variables, separate outputs.
- No types, no IDE autocomplete worth the name.
- `for_each` and `count` logic gets messy fast.
- It is still configuration, not a programming model.

The moment you want a generic "S3 bucket with versioning + replication + access logs + a specific tag policy", you are reinventing OO programming inside HCL — without the tools that make OO bearable.

## The rescue: programmable IaC

The industry already had an answer:

- **CDKTF** — Cloud Development Kit for Terraform.
- **Pulumi** — programmable cloud infrastructure.

Both let you write infrastructure in a real programming language and render it to a deployable format.

## Inspired by CDKTF

CDKTF showed the path that Dinghy took to heart:

- Write infrastructure in **TypeScript**
- Render as **HCL in JSON** format

You get a real language: loops, functions, imports. You get full IDE support: types, autocomplete, refactoring. You build an in-memory model, then render it to JSON that Terraform consumes.

That last bit — *build an in-memory model, then render to JSON* — is the door that React happens to walk through very gracefully.

## React as a rendering engine

Dinghy's pipeline:

```
Zod / YAML  →  React TSX  →  Terraform JSON
```

The interesting part is the middle step. Dinghy uses React's **reconciler API** — the part of React that diff-and-renders a fiber tree — as a generic tree-building engine. The output happens to be Terraform JSON instead of DOM nodes.

## React's core insight

React separates **what** to render from **how** to render it. That single idea makes a few things fall out:

- Components are lightweight — just functions.
- The virtual DOM is a tree of fibers.
- TSX is a remarkably natural fit for nested resources (a VPC contains subnets which contain instances which depend on security groups…).

If you have ever written a Terraform module and wished you could just *nest* things and have dependencies wire themselves up, that is exactly what TSX gives you.

## React, everywhere

React was originally a web library, but it has long since escaped that box:

- **Web** — the original
- **Native** — iOS and Android
- **CLI** — Gemini, Copilot, Claude Code all render UI with React-like trees
- **Infrastructure** — Dinghy, rendering to Terraform / diagrams / docs

Same mental model, different output.

## What Dinghy *does not* use

Modern React has accumulated a lot of complexity around mutable state and the render lifecycle. Dinghy throws all of it overboard:

- ~~`useState`~~ — local mutable state
- ~~`useEffect`~~ — side effects and lifecycle
- ~~`useMemo`~~ — memoization for expensive computations

**Dinghy only renders once.** There is no reactivity, no time, no cleanup. You describe the infrastructure, Dinghy walks the tree once, and writes Terraform JSON.

## The power of `withContext`

What Dinghy keeps from React is *context*, and it turns out to be plenty:

```tsx
const BucketVersioning = () => {
  const { s3Bucket } = useAwsS3Bucket()
  return (
    <AwsS3BucketVersioning
      bucket={s3Bucket.bucket}
      versioning_configuration={{ status: 'Enabled' }}
    />
  )
}

<AwsS3Bucket ...>
  <BucketVersioning />
</AwsS3Bucket>
```

`BucketVersioning` does not need to be told *which* bucket it is enabling versioning on — it just asks for the surrounding `AwsS3Bucket` via context. Drop it under any bucket and it Just Works.

That is the kind of composition HCL fundamentally cannot give you.

---

Up next: how diagrams come together as TSX components in [Diagram as Code](#).
