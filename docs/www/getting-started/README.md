# Welcome to Dinghy

Dinghy is an open source toolchain designed for your Diagram as Code and
Infrastructure as Code workflows.

At it's core, it use React to render your data model into target: draw.io based
diagram or Terraform (OpenToufu/CloudFormation in the future) based
infrastruture.

All those powerful technologies are delivered via a simple Cli through Docker.
Under the hood, the stable Cli drive the versioned Engine to perform critical
operations in a fast, reliable and predicatable way, all based on Deno runtime
with zero language configuration.

The project embraces the spirit of a dinghy: simple, reliable and fun to sail
with.

## Quick install

Install the latest Dinghy Cli on your system using the terminal command:

```sh
curl -fsSL https://dinghy.dev/install.sh | sh
```

More options on the [installation](./installation.md) page

## Basic example

Create a file called app.tsx

```
import { Shape } from '@dinghy/base-components'

export default function App() {
  return (
    <Shape _title='Basic example'>
      <Shape _dependsOn='B'>A</Shape>
      <Shape>B</Shape>
    </Shape>
  )
}
```

Then from same directory, run:

```
dinghy render
```

It will generate a few files in output folder include the image:

![image/png]

Don't put off by all those Shape components, it's just an simple example for
demo purpose. Most time you will write more expressive code. The
[Step by step](./todo) examples shows how the code could progress from simple
Shape component.
