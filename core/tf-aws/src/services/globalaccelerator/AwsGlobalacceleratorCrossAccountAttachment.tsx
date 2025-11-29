import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/globalaccelerator_cross_account_attachment

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  principals: resolvableValue(z.string().array().optional()),
  resource: resolvableValue(
    z.object({
      cidr_block: z.string().optional(),
      endpoint_id: z.string().optional(),
      region: z.string().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  last_modified_time: z.string().optional(),
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

export function AwsGlobalacceleratorCrossAccountAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_cross_account_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorCrossAccountAttachment = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsGlobalacceleratorCrossAccountAttachment,
    node,
    id,
  )

export const useAwsGlobalacceleratorCrossAccountAttachments = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsGlobalacceleratorCrossAccountAttachment,
    node,
    id,
  )
