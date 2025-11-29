import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glacier_vault

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  access_policy: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  notification: resolvableValue(
    z.object({
      events: z.string().array(),
      sns_topic: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  location: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlacierVault(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glacier_vault'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlacierVault = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlacierVault, node, id)

export const useAwsGlacierVaults = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlacierVault, node, id)
