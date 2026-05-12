---
title: "Diagram as Code: architecture diagrams as TSX components"
description: "Dinghy renders architecture diagrams from TSX. Start with raw shapes, refactor into named components, then plug in pre-built AWS icons — diagrams that read like code and render to draw.io."
slug: diagram-as-code
tags: [dinghy, diagrams, drawio, tsx, react]
image: /assets/img/blog/cover-diagram-as-code.svg
draft: true
---

![Diagram as Code](/assets/img/blog/cover-diagram-as-code.svg)

Architecture diagrams have a habit of going stale the moment you redraw them. The boxes stop matching the systems, the arrows stop matching the dependencies, and after a quarter or two the diagram has more in common with the *vibe* of the system than with the actual one.

Dinghy fixes that the same way Terraform fixes ad-hoc cloud changes: by treating the diagram as **code**.

<!-- truncate -->

## The basic shape

Every Dinghy diagram is a tree of `Shape` components. Dependencies are first-class, declared with `_dependsOn` / `_dependsBy`. Layout direction comes from `_direction`.

```tsx
import { Shape } from '@dinghy/base-components'

export default () => (
  <Shape>
    Web App
    <Shape _dependsOn='Load Balancer'>Client</Shape>
    <Shape>
      Cloud
      <Shape _direction='vertical'>
        Public Subnet
        <Shape _dependsOn='Application'>Load Balancer</Shape>
        <Shape _dependsBy='Load Balancer'>Firewall</Shape>
      </Shape>
      <Shape _direction='vertical'>
        Private Subnet
        <Shape _dependsOn='Postgres'>Application</Shape>
        <Shape>Postgres</Shape>
      </Shape>
    </Shape>
  </Shape>
)
```

Render it and you get a draw.io page with all the right boxes, all the right arrows, and a layout that looks like the source code looks: a Web App on the outside, a Cloud nested inside, two subnets stacked vertically, all the dependency edges drawn for you.

## Named shapes (the readability pass)

The basic version reads fine the first time, but the second time it gets noisy. Refactor it into named components and the diagram suddenly reads like a sentence:

```tsx
const Client = (props: any) =>
  <Shape _dependsOn='Load Balancer' {...props} />

export default () => (
  <WebApp>
    <Client />
    <Cloud>
      <PublicSubnet>
        <LoadBalancer />
        <Firewall />
      </PublicSubnet>
      <PrivateSubnet>
        <Application />
        <Postgres />
      </PrivateSubnet>
    </Cloud>
  </WebApp>
)
```

Same diagram, but now `<Client />` carries its semantics in its name. The layout primitives are still there — they have just moved one layer down, where they belong.

## Styled shapes (the icon pass)

The final pass is to drop in real AWS icons instead of generic boxes:

```tsx
import * as awsGeneralResources from
    '@dinghy/diagrams/entitiesAwsGeneralResources'

const Client = (props: any) => (
  <awsGeneralResources.Client
    _dependsOn='Load Balancer'
    {...props}
  />
)
```

`@dinghy/diagrams/entitiesAwsGeneralResources` ships the official AWS resource icons, ready to be dropped into a tree. The TSX still reads exactly the same — only the rendered output changes from generic shapes to AWS-flavored ones.

## Why this scales

Once a diagram is code, three things happen:

- It lives next to the system it describes — same repo, same review process.
- Refactors are mechanical: rename a component, every diagram that uses it updates.
- New diagrams compose existing components instead of redrawing them.

The diagram stops being a thing you maintain *in addition to* the system, and starts being a thing the system reflects.

---

Next up: [Infrastructure as Code](#) — what a real Dinghy IaC project looks like end-to-end.
