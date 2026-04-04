# Composites

High-level components that create multiple Terraform resources automatically.
Each composite handles common patterns (auto-VPC, auto-IAM, auto-discovery) so
the TSX stays minimal.

---

## cloudfront

`import { ... } from '@dinghy/tf-aws/cloudfront'`

### CloudfrontSites

**Props:** `bucket`, `bucketSurfix`

---

## ec2

`import { ... } from '@dinghy/tf-aws/ec2'`

### Ec2Servers

**Props:** `name`, `instance_type`, `linuxFlavor`,
`associate_public_ip_address`, `enableSsm`

---

## iam

`import { ... } from '@dinghy/tf-aws/iam'`

### IamRole

**Props:** `assume_role_service`

### IamRoles

**Props:** `assume_role_service`

### IamRolePolicyAttachment

**Props:** `assume_role_service`

### IamInstanceRole

**Props:** `assume_role_service`

---

## lambda

`import { ... } from '@dinghy/tf-aws/lambda'`

### LambdaFunctions

**Props:** `sourceFile`, `archiveDir`

---

## s3

`import { ... } from '@dinghy/tf-aws/s3'`

### S3Bucket

**Props:** `bucket`, `useData`, `versioningEnabled`, `loggingEnabled`,
`logBucket`, `logPrefix`, `bucketPolicy`, `corsPolicy`, `contentTypes`

---

## vpc

`import { ... } from '@dinghy/tf-aws/vpc'`

### Vpc

**Props:** `name`, `publicSubnetsCount`, `privateSubnetsCount`, `publicSubnets`
