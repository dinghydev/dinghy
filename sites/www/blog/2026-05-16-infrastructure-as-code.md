---
title: "Infrastructure as Code with Dinghy: 248 lines of Terraform from 8 lines of source"
description: "What a Dinghy IaC project actually looks like — a tree of TSX components rendered to ~250 lines of OpenTofu / Terraform JSON, with overview, action, and connect views."
slug: infrastructure-as-code
tags: [dinghy, iac, terraform, opentofu, tsx]
image: /assets/img/blog/cover-infrastructure-as-code.svg
draft: true
---

![Infrastructure as Code: 8 lines of TSX → 248 lines of Terraform](/assets/img/blog/cover-infrastructure-as-code.svg)

The previous post in this series argued for [why React makes sense as an IaC rendering engine](#). This one is the payoff: what an actual Dinghy infrastructure project looks like, top to bottom.

The headline number, just to set expectations:

> **8 lines of TSX → 248 lines of Terraform JSON**

That ratio is not a marketing claim; it is what falls out naturally once components capture the boilerplate that HCL forces you to repeat.

<!-- truncate -->

## The source

A Dinghy IaC project is a TSX tree. You compose components — most of them ship with the engine — and Dinghy's renderer walks that tree once and writes Terraform JSON.

The 8-line example is the kind of thing that lives in any web stack:

```tsx
<App>
  <Vpc>
    <Subnet />
    <Ec2 />
    <Rds />
  </Vpc>
</App>
```

Dinghy's renderer expands that into the full ~250 lines of OpenTofu / Terraform: VPC, subnets, route tables, security groups, the EC2 instance, the RDS instance, the IAM roles and policies, all the right `depends_on` wiring. The kind of file you would normally hand-write and then copy-paste across environments.

## The IaC editor experience

Dinghy ships a project view that is more than `terraform plan` in a window. The interesting screens are:

- **Overview** — a single graph of every resource and its dependencies, generated from the rendered Terraform.
- **All view** — every resource laid out, zoomable, pannable.
- **Config** — drill into a resource and see the inputs the TSX produced.
- **Action** — run plan / apply / destroy from the same view.
- **Connect** — the bit that does the most work for you (more on this below).

If you have ever lost an hour digging through `terraform.tfstate` to figure out which security group references which instance, this view alone earns its keep.

## The "connect" magic

Connect is where the React idea pays off the most. When you have two resources that need to talk to each other — say, an EC2 instance and an RDS database — the connect view lets you wire them up in the diagram and have Dinghy generate the right security group rules, IAM policies, and `depends_on` edges in the rendered Terraform.

You are not editing the Terraform. You are editing the *intent*, and Dinghy renders both the Terraform and the picture of it from the same source of truth.

## Why the ratio is what it is

The 248-line output is not bloated — it is what HCL *requires* for that infrastructure to actually run. The 8-line input is what *humans actually need to specify* once the renderer knows the patterns.

Components like `<Vpc>` and `<Rds>` carry the assumed-good defaults: tagging conventions, security group skeletons, parameter group references, IAM roles and policies. Override anything you want via props. Leave it alone and you get the 80% case for free.

That is the same trade React made for the DOM 12 years ago. Dinghy makes it for cloud infrastructure.

---

Next up: [Site Builder](#) — the same philosophy, applied to docs sites.
