import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlueRegistry } from './AwsGlueRegistry.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/glue_registry

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsGlueRegistry(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsGlueRegistry
      _type='aws_glue_registry'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlueRegistry = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsGlueRegistry, node, id)

export const useDataAwsGlueRegistrys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsGlueRegistry, node, id)
