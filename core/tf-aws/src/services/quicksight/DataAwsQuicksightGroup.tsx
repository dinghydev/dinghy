import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsQuicksightGroup } from './AwsQuicksightGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/quicksight_group

export const InputSchema = z.object({
  group_name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  principal_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsQuicksightGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsQuicksightGroup
      _type='aws_quicksight_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsQuicksightGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsQuicksightGroup, node, id)

export const useDataAwsQuicksightGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsQuicksightGroup, node, id)
