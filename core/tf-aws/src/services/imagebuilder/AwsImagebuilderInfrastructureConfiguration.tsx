import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/imagebuilder_infrastructure_configuration

export const InputSchema = z.object({
  instance_profile_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  instance_metadata_options: resolvableValue(
    z.object({
      http_put_response_hop_limit: z.number().optional(),
      http_tokens: z.string().optional(),
    }).optional(),
  ),
  instance_types: resolvableValue(z.string().array().optional()),
  key_pair: resolvableValue(z.string().optional()),
  logging: resolvableValue(
    z.object({
      s3_logs: z.object({
        s3_bucket_name: z.string(),
        s3_key_prefix: z.string().optional(),
      }),
    }).optional(),
  ),
  placement: resolvableValue(
    z.object({
      availability_zone: z.string().optional(),
      host_id: z.string().optional(),
      host_resource_group_arn: z.string().optional(),
      tenancy: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  resource_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  sns_topic_arn: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  terminate_instance_on_failure: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  date_updated: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsImagebuilderInfrastructureConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_infrastructure_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderInfrastructureConfiguration = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsImagebuilderInfrastructureConfiguration,
    node,
    id,
  )

export const useAwsImagebuilderInfrastructureConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsImagebuilderInfrastructureConfiguration,
    node,
    id,
  )
