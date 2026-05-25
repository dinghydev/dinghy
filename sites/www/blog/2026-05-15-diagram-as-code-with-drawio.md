---
title: 'Diagram as Code with draw.io'
description: 'Dinghy renders draw.io diagrams from TSX. Start with raw shapes, refactor into named components, then plug in pre-built AWS icons — diagrams that read like code and render to draw.io.'
slug: diagram-as-code-with-drawio
tags: [dinghy, react, drawio]
image: /assets/img/blog/cover-diagram-as-code.svg
draft: true
devto_url: https://dev.to/mrduguo/diagram-as-code-with-drawio-50ea
devto_id: 3703228
---

![Diagram as Code with draw.io](/assets/img/blog/cover-diagram-as-code.svg)

Architecture diagrams have a habit of going stale the moment you redraw them.
The boxes stop matching the systems, the arrows stop matching the dependencies,
and after a quarter or two the diagram has more in common with the _vibe_ of the
system than with the actual one.

Dinghy fixes that the same way Terraform fixes ad-hoc infrastructure changes: by
treating the diagram as **code**.

<!-- truncate -->

## The basic shape

Every Dinghy diagram is a tree of `Shape` components. Dependencies are part of
the model, declared with `_dependsOn` / `_dependsBy`. Layout direction comes
from `_direction`.

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

Render it and you get a draw.io page with all the right boxes, all the right
arrows, and a layout that looks like the source code looks: a Web App on the
outside, a Cloud nested inside, two subnets stacked vertically, all the
dependency edges drawn for you:

![diagram with shape](https://dinghy.dev/assets/images/step-1-basic-shape-c9b1e22a858eff8d681e795840d4df3a.png)

## Named shapes for readability

The plain `Shape` version does describe the diagram — every box is labelled,
every dependency is there — but it is not much fun to read. Everything is a
`Shape` with a `name`, and you have to read the strings to work out what is
what. This is exactly the kind of thing React's named components were made for.
Lift each role into its own component and the diagram code becomes easy to read:

```tsx
const Client = (props: any) => <Shape _dependsOn='Load Balancer' {...props} />

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

Same diagram, but now `<Client />` carries its semantics in its name. The layout
primitives are still there — they have just moved one layer down, where they
belong.

## Styled shapes with icons

The final pass is to drop in real AWS icons instead of generic boxes:

```tsx
import * as awsGeneralResources from '@dinghy/diagrams/entitiesAwsGeneralResources'

const Client = (props: any) => (
  <awsGeneralResources.Client
    _dependsOn='Load Balancer'
    {...props}
  />
)
```

`@dinghy/diagrams/entitiesAwsGeneralResources` ships the official AWS resource
icons, ready to be dropped into a tree. The TSX still reads exactly the same —
only the rendered output changes from generic shapes to AWS-flavored ones.

![diagram with icon](https://dinghy.dev/assets/images/step-3-draw-io-6f144d5adbbe371adec748d14b51c93a.png)

## A new way to build draw.io diagrams

Dinghy is not a new diagram software. The output of every example above is still
a plain `.drawio` file: you can open it in the draw.io editor, tweak it by hand,
share it with someone who has never heard of Dinghy, and it will behave exactly
like any other draw.io diagram.

What Dinghy changes is the way you _build_ the diagram. Instead of dragging
shapes around in an editor and nudging them by a few pixels until the layout
looks roughly right — only to have it drift again the next time someone edits it
— you describe the shapes and their relationships in TSX, and Dinghy lays them
out pixel-perfect every time. Same input, same output, no manual cleanup.
Everything draw.io already gives you — the shape library, the rendering, the
editing experience, the ecosystem of tools that read `.drawio` files — stays
exactly where it is.

## Learn more

- Follow the
  [Diagram as Code get-started guide](https://dinghy.dev/guides/get-started/diagram-as-code)
  to scaffold your first project and render your first `.drawio` file.
- Browse the [example diagrams](https://dinghy.dev/examples/diagrams) to see
  what real Dinghy diagrams look like — from a handful of shapes up to full AWS
  architectures.
