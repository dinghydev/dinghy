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

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  auth_mode: resolvableValue(z.string()),
  default_s3_location: resolvableValue(z.string()),
  engine_security_group_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  service_role: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  vpc_id: resolvableValue(z.string()),
  workspace_security_group_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  encryption_key_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  idp_auth_url: resolvableValue(z.string().optional()),
  idp_relay_state_parameter_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_role: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/emr_studio

export function AwsEmrStudio(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_studio'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrStudio = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEmrStudio, idFilter, baseNode, optional)

export const useAwsEmrStudios = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEmrStudio, idFilter, baseNode, optional)
