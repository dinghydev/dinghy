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

export const DataAwsSfnStateMachineInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSfnStateMachineOutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  definition: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  revision_id: z.string().optional(),
  role_arn: z.string().optional(),
  status: z.string().optional(),
})

export type DataAwsSfnStateMachineInputProps =
  & z.input<typeof DataAwsSfnStateMachineInputSchema>
  & NodeProps

export type DataAwsSfnStateMachineOutputProps =
  & z.output<typeof DataAwsSfnStateMachineOutputSchema>
  & z.output<typeof DataAwsSfnStateMachineInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sfn_state_machine

export function DataAwsSfnStateMachine(
  props: Partial<DataAwsSfnStateMachineInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSfnStateMachine
      _type='aws_sfn_state_machine'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSfnStateMachineInputSchema}
      _outputSchema={DataAwsSfnStateMachineOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSfnStateMachine = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSfnStateMachineOutputProps>(
    DataAwsSfnStateMachine,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSfnStateMachines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSfnStateMachineOutputProps>(
    DataAwsSfnStateMachine,
    idFilter,
    baseNode,
    optional,
  )
