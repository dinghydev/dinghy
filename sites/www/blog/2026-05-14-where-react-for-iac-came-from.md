---
title: 'Where React for IaC came from'
description: "The origin of Dinghy: a DevOps engineer drowning in copy-pasted Terraform, the CDKTF detour that didn't quite fit, and the moment TSX clicked as the right shape for cloud resources."
slug: where-react-for-iac-came-from
tags: [react, terraform, cdktf, drawio]
image: /assets/img/blog/cover-where-react-for-iac-came-from.svg
draft: true
devto_url: https://dev.to/mrduguo/where-react-for-iac-came-from-10e0
devto_id: 3687106
---

![Where React for IaC came from](/assets/img/blog/cover-where-react-for-iac-came-from.svg)

This is the first technical post in the Dinghy series, and it is the one I had
to write before any of the others made sense. It is the **origin story** of the
project — how a Terraform codebase that had grown beyond what copy-paste could
maintain ended up being rendered out of TSX — and the **core concept** the rest
of Dinghy is built on.

<!-- truncate -->

## How I ended up here

Back in the day, I was maintaining a Terraform codebase across several
environments. Most of the configuration was duplicated between them — the same
resources, the same modules, repeated for every environment with only the inputs
changing. Every change had to land in every environment. Every difference
between them was either a deliberate choice or a bug waiting to happen.

Modules helped. For a while. Then the modules themselves became the maintenance
burden — a layer of indirection that still couldn't express what I actually
wanted to say.

HCL is HashiCorp **Configuration** Language. The keyword is _configuration_. It
describes resources. It does not let you reason about them.

I wanted a real language.

## The first move: CDKTF

CDKTF — Cloud Development Kit for Terraform — was the obvious next stop. Write
infrastructure in TypeScript, render to Terraform JSON, deploy with the regular
Terraform tooling. I tried it. It did what it said on the tin: real loops, real
functions, real imports, real IDE support.

But two things kept nagging.

**Construct boilerplate.** CDKTF inherits AWS CDK's construct pattern:
`new Vpc(this, 'vpc', {...})`, then `new Subnet(this, 'subnet', { vpc, ... })`.
Every resource needs a parent scope and a unique id, hand-passed. It is faithful
to AWS CDK, but it never stopped feeling like extra steps around the thing I
actually wanted to write.

**Cross-resource wiring.** When two resources needed to talk to each other, I
was still threading handles by hand. Pass the VPC into the subnet. Pass the
subnet into the EC2. Pass the EC2 into the security group rule. The hierarchy in
my head — _VPC contains subnets contains instances_ — was nowhere visible in the
source.

CDKTF had solved the programmable-language problem. It had not, for me, solved
the _expressing nesting_ problem.

## The click: TSX nests the way infrastructure nests

When you draw a cloud architecture diagram, you naturally nest things inside
containers — the VPC box wraps the subnet boxes; the subnet boxes wrap the
instances. That nesting is how the infrastructure composes.

The moment that turned this into a project rather than a complaint was noticing
that **TSX is already nested in the same way**. When you write:

```tsx
<Vpc>
  <Subnet>
    <Ec2 />
  </Subnet>
</Vpc>
```

The source code shape matches the runtime shape. The thing you write looks like
the thing you mean. No `new X(parent, id, {...})`. No explicit handle threading.
The parent is right there — it is the JSX element containing you.

The next step was obvious. React looks like a tool for building web pages, but
underneath, it is a general-purpose engine for building trees. The part that
turns your TSX into HTML doesn't actually need to produce HTML — it can produce
anything, as long as you tell it how. Tell it to produce Terraform JSON, and
that is what you get.

## Don't worry about React's complexity

If React's hooks, lifecycle, and state-management debates have put you off, you
can relax. Dinghy uses almost none of that.

Dinghy renders **once**. You write the TSX, Dinghy walks the tree from top to
bottom one time, writes the Terraform JSON, and stops. No reactivity. No
re-renders. No state to manage. No lifecycle.

So none of the modern React you might have struggled with applies here:

- ~~`useState`~~ — no local state
- ~~`useEffect`~~ — no side effects or lifecycle
- ~~`useMemo`~~ — nothing to memoise

Dinghy only keeps the bits that make the nesting work:

- **TSX** — the authoring syntax
- The **tree-walker** that turns TSX into output
- **`useContext`** — for letting a child component reach a surrounding parent
  (the bucket trick you will see in the next section)

Most of what React has accumulated for browser UI doesn't apply here, and you
don't need to know it.

## Context fixes the wiring problem

Here is the bit that finally felt right. With CDKTF I was threading a bucket
handle down through props. With Dinghy:

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

`BucketVersioning` does not need to be told _which_ bucket it is enabling
versioning on. It asks the surrounding `AwsS3Bucket` via context. Drop it
anywhere under a bucket and it Just Works.

That is the kind of composition HCL fundamentally cannot give you. CDKTF can do
it, but only by passing the parent reference by hand.

## Beyond Web

The other thing that fell out of choosing React: **the output can be anything**.
React doesn't care whether the result is HTML, native mobile widgets, terminal
UI, or Terraform JSON. Point it at a different kind of output, and it produces
that.

React started as a web library, but it has long since moved beyond the web:

- **Web** — the original
- **Native** — iOS and Android apps
- **CLI** — Ink, Claude Code, and similar tools render terminal interfaces with
  React-like trees
- **Infrastructure** — Dinghy, rendering diagrams and Terraform

Same model, different output. That is why a single engine can sensibly cover
diagrams and infrastructure under one roof — what the tree renders to is just a
detail.
