import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appconfig_extension

export const InputSchema = z.object({
  action_point: resolvableValue(
    z.object({
      point: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  parameter: resolvableValue(
    z.object({
      description: z.string().optional(),
      name: z.string(),
      required: z.boolean().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppconfigExtension(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_extension'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigExtension = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppconfigExtension, node, id)

export const useAwsAppconfigExtensions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppconfigExtension, node, id)
