import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSfnStateMachine } from './AwsSfnStateMachine.tsx'

export const InputSchema = z.object({
  description: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  definition: z.string().optional(),
  id: z.string().optional(),
  revision_id: z.string().optional(),
  role_arn: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/sfn_state_machine

export function DataAwsSfnStateMachine(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSfnStateMachine
      _type='aws_sfn_state_machine'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSfnStateMachine = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsSfnStateMachine, idFilter, baseNode)

export const useDataAwsSfnStateMachines = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsSfnStateMachine, idFilter, baseNode)
