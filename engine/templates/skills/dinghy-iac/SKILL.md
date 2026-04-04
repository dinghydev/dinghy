---
name: dinghy-iac
description: Create Infrastructure as Code using Dinghy's React TSX components. Use when the user wants to provision infrastructure (currently AWS) using Terraform/OpenTofu rendered from TSX.
argument-hint: [description]
---

Define infrastructure as React TSX that renders to Terraform JSON. Apply with
OpenTofu (default) or Terraform. Configuration is data-driven — YAML provides
the data model, TSX defines the component structure.

## Workflow

1. **Create a TSX file** in the current directory. Name it descriptively
   (kebab-case, e.g. `my-server.tsx`, `my-lambda.tsx`). Each `.tsx` file exports
   a default React component wrapped in `<AwsStack>`. Only import modules that
   are actually used — do not generate unused imports.

2. **Configure `dinghy.config.yml`** to provide the data model for your
   infrastructure. YAML keys map to component props and are auto-discovered by
   composites. Most infrastructure is defined here, not in TSX props.

3. **After generating files**, ask the user if they want to see the changes with
   `dinghy tf diff`. Also mention:
   ```
   Next steps:
   - `dinghy tf diff`    — render and preview infrastructure changes
   - `dinghy tf deploy`   — apply infrastructure changes
   - `dinghy devcontainer` — open in VSCode Devcontainer
   ```

## Project Layout

```
my-server.tsx             <- each TSX file is a separate stack
my-lambda.tsx
dinghy.config.yml         <- data model: servers, sites, lambdas, roles, etc.
src/
  lambdas/                <- Lambda source files (auto-discovered)
    my-handler.ts
    my-handler/index.ts
s3-files/                 <- files to upload to S3 (auto-discovered)
  bucket-name/
    index.html
config/
  stacks/                 <- stack-level config (loaded by stack name tags)
    default.yml
    prod.yml
  iam-role-policies/      <- IAM policies (loaded by role name tags)
    default.yml           <- shared policies for all roles
    ec2.yml               <- applies to any role with "ec2" in name
    my-ec2-role.yml       <- applies to exact role name
```

The file name (minus `.tsx` extension) becomes the stack name.

## Core Concepts

### Data model pattern

YAML configuration provides the data model. TSX defines the component structure
that consumes it. Components auto-discover configuration by convention:

| Config key    | Consumed by       | Description                           |
| ------------- | ----------------- | ------------------------------------- |
| `servers`     | `Ec2Servers`      | Map of server name → instance config  |
| `sites`       | `CloudfrontSites` | Map of domain → CloudFront config     |
| `lambdas`     | `LambdaFunctions` | Map of function name → lambda config  |
| `roles`       | `IamRoles`        | Map of role name → IAM role config    |
| `awsProvider` | `AwsStack`        | AWS provider settings (region, etc.)  |
| `awsStack`    | `AwsStack`        | Stack settings (s3Backend, logBucket) |

### AwsStack

Root container that auto-creates: AWS provider, state backend, and optional log
bucket. All infrastructure goes inside `<AwsStack>`.

```tsx
import { AwsStack } from '@dinghy/tf-aws'

export default () => <AwsStack>{/* infrastructure here */}</AwsStack>
```

### Composites

High-level components that create multiple Terraform resources automatically.
Import from `@dinghy/tf-aws/{service}`:

| Component         | Import                      | Creates                                  |
| ----------------- | --------------------------- | ---------------------------------------- |
| `Ec2Servers`      | `@dinghy/tf-aws/ec2`        | EC2 + VPC + IAM + AMI discovery          |
| `Vpc`             | `@dinghy/tf-aws/vpc`        | VPC + subnets + IGW + routes + SGs       |
| `S3Bucket`        | `@dinghy/tf-aws/s3`         | S3 + versioning + logging + file uploads |
| `CloudfrontSites` | `@dinghy/tf-aws/cloudfront` | CloudFront + ACM + Route53 + OAC         |
| `LambdaFunctions` | `@dinghy/tf-aws/lambda`     | Lambda + IAM + source bundling           |
| `IamRoles`        | `@dinghy/tf-aws/iam`        | IAM roles + policies + attachments       |
| `IamRole`         | `@dinghy/tf-aws/iam`        | Single IAM role                          |
| `IamInstanceRole` | `@dinghy/tf-aws/iam`        | IAM role + instance profile for EC2      |

Read `modules/composites.md` for detailed props and hooks.

### AWS service resources

For direct Terraform resource access beyond composites, import from
`@dinghy/tf-aws/service{ServiceName}`:

```tsx
import { AwsInstance } from '@dinghy/tf-aws/serviceEc2'
import { AwsDbInstance } from '@dinghy/tf-aws/serviceRds'
import { DataAwsCallerIdentity } from '@dinghy/tf-aws/serviceSts'
```

- **Resources**: `Aws{ResourceName}` (e.g. `AwsInstance`, `AwsS3Bucket`)
- **Data sources**: `DataAws{ResourceName}` (e.g. `DataAwsAmi`)
- **Hooks**: `useAws{ResourceName}()` to reference sibling/parent resources
- Props follow the standard Terraform AWS provider resource schemas

### Convention-based file discovery

Composites auto-discover files from conventional directories:

- **Lambda sources**: `src/lambdas/{name}.ts` or `src/lambdas/{name}/index.ts` —
  auto-bundled with Deno and zipped for deployment
- **S3 files**: `s3-files/{bucket-name}/` — auto-uploaded to the S3 bucket
- **IAM policies**: `config/iam-role-policies/` — see below

### Config file loading (name-tag matching)

Dinghy loads YAML config files from `config/` directories using a name-tag
matching pattern. For a given name like `foo-bar-baz`, the name is split by `-`
and all contiguous sub-combinations are generated as tags. Files matching these
tags are loaded and deep-merged in this order:

1. `default.yml`
2. `foo.yml`
3. `bar.yml`
4. `baz.yml`
5. `foo-bar.yml`
6. `bar-baz.yml`
7. `foo-bar-baz.yml`

Later files override earlier ones. This applies to:

- **Stack config** (`config/stacks/` or `config/`): loaded by stack name
- **IAM role policies** (`config/iam-role-policies/`): loaded by role name
- Any composite that uses `loadFilesData` internally

**Example**: for a role named `my-ec2-role`, these files are loaded from
`config/iam-role-policies/`:

```
default.yml        <- shared policies for all roles
my.yml             <- matches "my" tag
ec2.yml            <- matches "ec2" tag
role.yml           <- matches "role" tag
my-ec2.yml         <- matches "my-ec2" tag
ec2-role.yml       <- matches "ec2-role" tag
my-ec2-role.yml    <- matches full name
```

This lets you share config across related names. For example, `ec2.yml` applies
to any role with "ec2" in its name, while `default.yml` applies to all roles.

## Configuration Reference

### dinghy.config.yml

```yaml
# AWS provider
awsProvider:
  region: eu-west-1

# Stack settings
awsStack:
  title: My Stack Title
  s3Backend: true # enable S3 state backend
  logBucket: true # enable regional log bucket

# S3 backend (when s3Backend: true)
s3Backend:
  bucket: my-unique-backend-bucket

# EC2 servers (consumed by Ec2Servers)
servers:
  my-server:
    instance_type: t3.nano # default
    linuxFlavor: al2023 # al2023 | ubuntu
    enableSsm: true # default, adds SSM policy
    associate_public_ip_address: true
    root_block_device:
      volume_size: 100

# Lambda functions (consumed by LambdaFunctions)
lambdas:
  my-handler:
    runtime: nodejs24.x # default
    handler: index.handler # default
    memory_size: 256
    timeout: 60
    environment:
      variables:
        NODE_ENV: production

# IAM roles (consumed by IamRoles)
roles:
  my-role:
    assume_role_service: ec2.amazonaws.com # default
  my-lambda-role:
    assume_role_service: lambda.amazonaws.com

# CloudFront sites (consumed by CloudfrontSites)
sites:
  example.com:
    origins:
      site_root:
        target: 's3://my-origin-bucket'
    redirectFromNames:
      - '*.example.com'
    certVersions:
      - '1'
```

### IAM role policies

Policy files in `config/iam-role-policies/` are loaded using
[name-tag matching](#config-file-loading-name-tag-matching) on the role name.
Each file contains named policy groups:

```yaml title="config/iam-role-policies/default.yml"
# Applied to all roles (matches "default" tag)
shared-buckets:
  - permission: readonly
    buckets:
      - my-shared-bucket
```

```yaml title="config/iam-role-policies/my-role.yml"
# Applied to roles matching "my-role" tag
managed-policies:
  - name: AmazonEC2ContainerRegistryPullOnly
admin-buckets:
  - permission: admin
    buckets:
      - my-admin-bucket
```

Policy types:

- **Managed policies**: `{ name: "PolicyName" }` or
  `{ name: "arn:aws:iam::aws:policy/..." }`
- **S3 bucket policies**:
  `{ permission: readonly|readwrite|admin, buckets: [...] }`
- **Statement policies**: `{ actions: [...], resources: [...], effect: Allow }`

## Examples

### EC2 server

```tsx title="my-server.tsx"
import { AwsStack } from '@dinghy/tf-aws'
import { Ec2Servers } from '@dinghy/tf-aws/ec2'

export default () => (
  <AwsStack>
    <Ec2Servers />
  </AwsStack>
)
```

```yaml title="dinghy.config.yml"
servers:
  my-server:
    instance_type: t3.nano
```

Auto-creates: VPC with public subnet, security group (HTTP/HTTPS), IAM instance
profile with SSM, latest AMI discovery.

### Lambda function

```tsx title="my-lambda.tsx"
import { AwsStack } from '@dinghy/tf-aws'
import { LambdaFunctions } from '@dinghy/tf-aws/lambda'

export default () => (
  <AwsStack>
    <LambdaFunctions />
  </AwsStack>
)
```

Lambda sources are auto-discovered from `src/lambdas/`. Each `.ts` file or
`index.ts` in a subfolder becomes a Lambda function:

```
src/lambdas/
  my-handler.ts           <- becomes lambda "my-handler"
  api-handler/index.ts    <- becomes lambda "api-handler"
```

### CloudFront site

```tsx title="my-sites.tsx"
import { MoveToHere } from '@dinghy/base-components'
import { AwsStack } from '@dinghy/tf-aws'
import { CloudfrontSites } from '@dinghy/tf-aws/cloudfront'

export default () => (
  <AwsStack infrastructure={<MoveToHere includes='AwsRoute53Zone' />}>
    <CloudfrontSites />
  </AwsStack>
)
```

```yaml title="dinghy.config.yml"
awsStack:
  s3Backend: true
  logBucket: true
awsProvider:
  region: eu-west-1
sites:
  example.com:
    origins:
      site_root:
        target: 's3://my-origin-bucket'
    redirectFromNames:
      - '*.example.com'
    certVersions:
      - '1'
```

### IAM roles

```tsx title="my-roles.tsx"
import { AwsStack } from '@dinghy/tf-aws'
import { IamRoles } from '@dinghy/tf-aws/iam'

export default () => (
  <AwsStack>
    <IamRoles />
  </AwsStack>
)
```

```yaml title="dinghy.config.yml"
roles:
  my-ec2-role:
  my-lambda-role:
    assume_role_service: lambda.amazonaws.com
```

Policies go in `config/iam-role-policies/{role-name}.yml`.

## Commands

| Command                     | Description                               |
| --------------------------- | ----------------------------------------- |
| `dinghy render`             | Render TSX to Terraform JSON              |
| `dinghy render <stack>`     | Render a specific stack                   |
| `dinghy tf diff [stack]`    | Render and preview infrastructure changes |
| `dinghy tf init [stack]`    | Initialize Terraform/OpenTofu             |
| `dinghy tf plan [stack]`    | Preview infrastructure changes            |
| `dinghy tf deploy [stack]`  | Apply infrastructure changes              |
| `dinghy tf destroy [stack]` | Destroy infrastructure                    |
| `dinghy tf bash [stack]`    | Open bash in Terraform container          |
| `dinghy devcontainer`       | Open in VSCode Devcontainer               |

## Import Path Reference

| Package    | Import path                    | Purpose                                                               |
| ---------- | ------------------------------ | --------------------------------------------------------------------- |
| Foundation | `@dinghy/tf-aws`               | AwsStack, AwsProvider, S3Backend, LogBucket                           |
| Composites | `@dinghy/tf-aws/{service}`     | Ec2Servers, Vpc, S3Bucket, CloudfrontSites, LambdaFunctions, IamRoles |
| Services   | `@dinghy/tf-aws/service{Name}` | AwsInstance, AwsDbInstance, DataAwsAmi, etc.                          |
| Common     | `@dinghy/tf-common`            | Output, Backend, LocalFile, ArchiveFile                               |
| Base       | `@dinghy/base-components`      | MoveToHere (rarely needed directly)                                   |

## Loading Module Details

When you need detailed props and hooks for dinghy-specific components, read the
corresponding file from the `modules/` subdirectory of this skill directory:

| Category   | File                    | Key Components                                                                 |
| ---------- | ----------------------- | ------------------------------------------------------------------------------ |
| Foundation | `modules/foundation.md` | AwsStack, AwsProvider, S3Backend, LogBucket, S3BackendOutputs                  |
| Composites | `modules/composites.md` | Ec2Servers, Vpc, S3Bucket, CloudfrontSites, LambdaFunctions, IamRole, IamRoles |
| Common     | `modules/tf-common.md`  | Output, Backend, LocalBackend, LocalFile, ArchiveFile, DataArchiveFile         |

For AWS service resources (`@dinghy/tf-aws/service{Name}`), use your knowledge
of the Terraform AWS provider — the component props match the standard Terraform
resource schemas.
