import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  instance_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  access_endpoint: resolvableValue(
    z.object({
      endpoint_type: z.string(),
      vpce_id: z.string().optional(),
    }).array().optional(),
  ),
  appstream_agent_version: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  display_name: resolvableValue(z.string().optional()),
  domain_join_info: resolvableValue(
    z.object({
      directory_name: z.string().optional(),
      organizational_unit_distinguished_name: z.string().optional(),
    }).optional(),
  ),
  enable_default_internet_access: resolvableValue(z.boolean().optional()),
  iam_role_arn: resolvableValue(z.string().optional()),
  image_arn: resolvableValue(z.string().optional()),
  image_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_image_builder

export function AwsAppstreamImageBuilder(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_image_builder'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamImageBuilder = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsAppstreamImageBuilder,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppstreamImageBuilders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsAppstreamImageBuilder,
    idFilter,
    baseNode,
    optional,
  )
