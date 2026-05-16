import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSfnStateMachineVersionsInputSchema = TfMetaSchema.extend({
  statemachine_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSfnStateMachineVersionsOutputSchema = z.object({
  statemachine_versions: z.string().array().optional(),
})

export type DataAwsSfnStateMachineVersionsInputProps =
  & z.input<typeof DataAwsSfnStateMachineVersionsInputSchema>
  & NodeProps

export type DataAwsSfnStateMachineVersionsOutputProps =
  & z.output<typeof DataAwsSfnStateMachineVersionsOutputSchema>
  & z.output<typeof DataAwsSfnStateMachineVersionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sfn_state_machine_versions

export function DataAwsSfnStateMachineVersions(
  props: Partial<DataAwsSfnStateMachineVersionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sfn_state_machine_versions'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSfnStateMachineVersionsInputSchema}
      _outputSchema={DataAwsSfnStateMachineVersionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSfnStateMachineVersionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSfnStateMachineVersionsOutputProps>(
    DataAwsSfnStateMachineVersions,
    idFilter,
    baseNode,
    optional,
  )
