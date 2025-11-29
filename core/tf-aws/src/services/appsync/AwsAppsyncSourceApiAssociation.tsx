import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_source_api_association

export const InputSchema = z.object({
  description: resolvableValue(z.string().optional()),
  merged_api_arn: resolvableValue(z.string().optional()),
  merged_api_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_api_arn: resolvableValue(z.string().optional()),
  source_api_association_config: resolvableValue(
    z.object({
      merge_type: z.string(),
    }).array().optional(),
  ),
  source_api_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  association_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppsyncSourceApiAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_source_api_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncSourceApiAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppsyncSourceApiAssociation, node, id)

export const useAwsAppsyncSourceApiAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppsyncSourceApiAssociation, node, id)
