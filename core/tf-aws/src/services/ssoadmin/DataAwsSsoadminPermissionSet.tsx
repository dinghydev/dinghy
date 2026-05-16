import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsoadminPermissionSet } from './AwsSsoadminPermissionSet.tsx'

export const DataAwsSsoadminPermissionSetInputSchema = TfMetaSchema.extend({
  instance_arn: resolvableValue(z.string()),
  arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsoadminPermissionSetOutputSchema = z.object({
  created_date: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  relay_state: z.string().optional(),
  session_duration: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsSsoadminPermissionSetInputProps =
  & z.input<typeof DataAwsSsoadminPermissionSetInputSchema>
  & NodeProps

export type DataAwsSsoadminPermissionSetOutputProps =
  & z.output<typeof DataAwsSsoadminPermissionSetOutputSchema>
  & z.output<typeof DataAwsSsoadminPermissionSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssoadmin_permission_set

export function DataAwsSsoadminPermissionSet(
  props: Partial<DataAwsSsoadminPermissionSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsoadminPermissionSet
      _type='aws_ssoadmin_permission_set'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsoadminPermissionSetInputSchema}
      _outputSchema={DataAwsSsoadminPermissionSetOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsoadminPermissionSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsoadminPermissionSetOutputProps>(
    DataAwsSsoadminPermissionSet,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsoadminPermissionSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsoadminPermissionSetOutputProps>(
    DataAwsSsoadminPermissionSet,
    idFilter,
    baseNode,
    optional,
  )
