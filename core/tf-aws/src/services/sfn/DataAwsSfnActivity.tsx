import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSfnActivity } from './AwsSfnActivity.tsx'

export const DataAwsSfnActivityInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSfnActivityOutputSchema = z.object({
  creation_date: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsSfnActivityInputProps =
  & z.input<typeof DataAwsSfnActivityInputSchema>
  & NodeProps

export type DataAwsSfnActivityOutputProps =
  & z.output<typeof DataAwsSfnActivityOutputSchema>
  & z.output<typeof DataAwsSfnActivityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sfn_activity

export function DataAwsSfnActivity(
  props: Partial<DataAwsSfnActivityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSfnActivity
      _type='aws_sfn_activity'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSfnActivityInputSchema}
      _outputSchema={DataAwsSfnActivityOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSfnActivity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSfnActivityOutputProps>(
    DataAwsSfnActivity,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSfnActivitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSfnActivityOutputProps>(
    DataAwsSfnActivity,
    idFilter,
    baseNode,
    optional,
  )
