# Foundation

`import { ... } from '@dinghy/tf-aws'`

Core components that set up the AWS provider, state backend, and stack
structure.

## AwsProvider

**Hooks:** `useAwsProvider()`

**Props:** `providerId`, `alias`, `access_key`, `allowed_account_ids`,
`custom_ca_bundle`, `ec2_metadata_service_endpoint`,
`ec2_metadata_service_endpoint_mode`, `forbidden_account_ids`, `http_proxy`,
`https_proxy`, `insecure`, `max_retries`, `no_proxy`, `profile`, `region`,
`retry_mode`, `s3_us_east_1_regional_endpoint`, `s3_use_path_style`,
`secret_key`, `shared_config_files`, `shared_credentials_files`,
`skip_credentials_validation`, `skip_metadata_api_check`,
`skip_region_validation`, `skip_requesting_account_id`, `sts_region`,
`tag_policy_compliance`, `token`, `token_bucket_rate_limiter_capacity`,
`use_dualstack_endpoint`, `use_fips_endpoint`, `user_agent`, `assume_role`

## AwsStack

**Props:** `awsProvider`, `s3Backend`, `backendOutputs`, `infrastructure`,
`logBucket`

## S3BackendOutputs

## LogBucket

**Hooks:** `useLogBucket()`

**Props:** `bucket`, `bucketSurfix`

## S3Backend

**Hooks:** `useS3Backend()`

**Props:** `type`, `bucket`, `bucketSurfix`, `stateFile`, `stateFilePrefix`,
`stateFileExt`, `s3Bucket`
