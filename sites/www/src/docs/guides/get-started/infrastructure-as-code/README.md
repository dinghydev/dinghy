---
sidebar_position: 50
toc_max_heading_level: 4
---

import CodeBlock from "@theme/CodeBlock"; import AppTsx from
"!!raw-loader!../../../examples/tf-aws/composites/s3-bucket/app.tsx";

# Infrastructure as Code

## The Origins of Dinghy

Dinghy was inspired by [CDKTF](https://developer.hashicorp.com/terraform/cdktf)
(Cloud Development Kit for Terraform). Much like how React represents UI as a
virtual DOM before rendering it to the browser, CDKTF builds an infrastructure
model as a context tree, which then gets synthesized into Terraform
configuration and ultimately applied to create real infrastructure.

Instead of following CDKTF's approach to building and using the infrastructure
tree, I decided to leverage React component to construct the tree, and then
transform it into Terraform configuration. By using this method, I could also
render the same tree as a diagram, create tools that make both infrastructure
development and operations more seamless.

## Components

Dinghy Terraform components are structured as React components that extend from
the `Shape` base class. These components include special properties specific to
Infrastructure-as-Code (IaC), enabling automatic generation of Terraform
configuration. To learn more about their internal implementation and
capabilities, refer to the advanced guide:
[Tf Components Definition](/guides/advanced/tf-components-definition).

Let's walk through a fully working
[S3 Bucket](/examples/tf-aws/composites/s3-bucket) example to explore the core
Dinghy components you'll encounter. With just a single `app.tsx` file, you have
everything you need to kickstart your Dinghy Infrastructure as Code project.

<CodeBlock language="tsx" showLineNumbers title='app.tsx'>
{AppTsx}
</CodeBlock>

### Fundational components

#### Stack

A Stack is conceptually similar to a terraform workspace — each Stack maintains
its own separate state. In Dinghy, the Stack is bound to the root of your React
application, and its `title` and `name` will be kept in sync if you specify them
via config file or component attributes. Within a single codebase, you can
define multiple stacks to represent different environments or layer of your
resources. You could have single app.tsx for multiple stack with different
configuration. Or have different tsx for different stack. Refer to
[Stack Config](/guides/advanced/configuration#stack-config) for advanced
configuration.

#### Provider

The Provider component defines the Terraform provider block in your
infrastructure code. For AWS, you can use the
[AwsProvider](https://github.com/dinghydev/dinghy/blob/main/core/tf-aws/src/foundation/AwsProvider.tsx)
component like this:

```typescript
import { AwsProvider } from '@dinghy/tf-aws'

<AwsProvider region='eu-west-1'>
```

#### Backend

The Backend component defines the Terraform backend block to store your state.
For AWS, you can use the
[S3Backend](https://github.com/dinghydev/dinghy/blob/main/core/tf-aws/src/foundation/S3Backend.tsx)
component like this:

```typescript
import { S3Backend } from '@dinghy/tf-aws'

<S3Backend />
```

#### Auto create backend

Traditionally, setting up the backend for Terraform can be a tedious manual
process that must be done before any Terraform operations can take place. With
the S3Backend component, Dinghy automates this for you: the backend will be
created on demand as part of your Infrastructure as Code workflow. You can
enable automatic backend bucket creation by either passing the
`--auto-create-backend` flag or by setting the environment variable
`DINGHY_AUTO_CREATE_BACKEND=true`. This will automatically create the backend
bucket during the [init operation](/references/commands/engine/tf/init).

### Componsite components

Composite components are analogous to Terraform modules. They allow you to
configure and manage a group of related resources together using a higher-level,
more convenient interface with simplified components and configuration.
Composite components are constructed using one or more
[service components](#service-componenets) from below as building blocks.

### Service componenets

Service compoenents are basic terraform data models such as resource or data.
They are generated from official provider json data representation. There is one
to one maping for AWS Provider elements e.g. Terraform resource
[aws_s3_bucket](https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket)
is available to use as
[AwsS3Bucket](https://dinghy.dev/references/tf-aws/services/s3#awss3bucket):

```typescript
import { AwsS3Bucket } from '@dinghy/tf-aws/serviceS3'

<AwsS3Bucket />
```

#### Limitation of generated terraform schema

As the provider json data doesn't contains all the information necessary to
precise define the Dinghy schema, some times it might not accurate generate
desired terraform code.

If this occurs, you can work around the issue by using a
[raw category value](/guides/advanced/tf-components-definition#raw-category-value).

## use* functions

The `useCOMPONENT` or `useCOMPONENTs` functions are
[React hooks](https://react.dev/reference/react/hooks) that let you access the
state of a component after Dinghy completes the react rendering process. The
hook returns a proxy object representing the component, but this object is not
available during the usual React render lifecycle. However, the object's
resolvable function can be used to extract the final evaluated output when
needed.

### useCOMPONENT

The `useCOMPONENT` function returns a single value, named using the last two
words of the component’s name.

Following example show how we define a reusable component which use hooks to
enable versioning for the nearest s3Bucket.

Notice how this implementation requires no parameters, making it straightforward
and convenient to reuse wherever needed.

```typescript
const BucketVersioning = () => {
  const { s3Bucket } = useAwsS3Bucket()
  const BucketVersioningComponent: any =
    _components?.versioning as typeof AwsS3BucketVersioning ||
    AwsS3BucketVersioning
  return (
    <BucketVersioningComponent
      bucket={s3Bucket.bucket}
      _id={() => `${deepResolve(s3Bucket._id)}_versioning`}
      versioning_configuration={{ status: 'Enabled' }}
      depends_on={() => [s3Bucket._terraformId]}
    />
  )
}
```

### _terraformId

As shown in the last line of the example above, you can access Terraform-style
resource references using the `_terraformId` property.

### useCOMPONENTs

The `useCOMPONENTs` function returns an array of matched values. There are two
values returned:

1. First none empty array match from any parent. Named using the last two words
   of the component’s name with additional surfix `s`.
1. All match from root. Named using the last two words of the component’s name
   with prefix of `all` and surfix `s`.

You can use the `map` function on the returned array to extract specific
attributes. For example, here’s how subnets are passed to an AWS Load Balancer:

```typescript
const { awsSubnets } = useAwsSubnets();
return (
  <AwsLb
     subnets={() => awsSubnets.map((s) => s.id)}
     ...
```

### use* function parameters

The use* functions accept up to three optional parameters that let you customize
how the lookup is performed and which nodes are included.

1. `idFilter?: string` – Only include nodes whose `id` contains this substring
1. `baseNode?: NodeTree` – the node from which to begin searching downwards. If
   no match is found, the search continues upward through ancestor nodes.
1. `optional?: boolean` – By default, if no matching node is found, an exception
   will be thrown. Set `optional` to `true` to allow the function to return
   `undefined` instead of raising an error.

## Tf commands

In Dinghy, the term `tf` refers to either Terraform or OpenTofu runtime,
depending on which tool you choose to use.

Dinghy provides several wrapper commands for tf. For a complete list of
available commands, see the [tf commands](/references/commands/engine/tf)
reference.

### dinghy tf diff

The [diff](/references/commands/engine/tf/diff) command executes a series of
steps on the specified stack, or on all stacks if no stack is provided:

1. it [render](/references/commands/engine/render) your configuration
1. runs [tf init](/references/commands/engine/tf/init)
1. then performs [tf plan](/references/commands/engine/tf/plan) to show a
   preview of changes
