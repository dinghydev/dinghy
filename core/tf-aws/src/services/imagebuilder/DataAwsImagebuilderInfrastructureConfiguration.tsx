import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderInfrastructureConfiguration } from './AwsImagebuilderInfrastructureConfiguration.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  date_updated: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  date_created: z.string().optional(),
  description: z.string().optional(),
  instance_metadata_options: z.object({
    http_put_response_hop_limit: z.number(),
    http_tokens: z.string(),
  }).array().optional(),
  instance_profile_name: z.string().optional(),
  instance_types: z.set(z.string()).optional(),
  key_pair: z.string().optional(),
  logging: z.object({
    s3_logs: z.object({
      s3_bucket_name: z.string(),
      s3_key_prefix: z.string(),
    }).array(),
  }).array().optional(),
  name: z.string().optional(),
  placement: z.object({
    availability_zone: z.string(),
    host_id: z.string(),
    host_resource_group_arn: z.string(),
    tenancy: z.string(),
  }).array().optional(),
  resource_tags: z.record(z.string(), z.string()).optional(),
  security_group_ids: z.set(z.string()).optional(),
  sns_topic_arn: z.string().optional(),
  subnet_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  terminate_instance_on_failure: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_infrastructure_configuration

export function DataAwsImagebuilderInfrastructureConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsImagebuilderInfrastructureConfiguration
      _type='aws_imagebuilder_infrastructure_configuration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderInfrastructureConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsImagebuilderInfrastructureConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsImagebuilderInfrastructureConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsImagebuilderInfrastructureConfiguration,
    idFilter,
    baseNode,
    optional,
  )
