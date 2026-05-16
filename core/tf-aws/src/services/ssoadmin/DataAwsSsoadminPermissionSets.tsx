import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSsoadminPermissionSetsInputSchema = TfMetaSchema.extend({
  instance_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsoadminPermissionSetsOutputSchema = z.object({
  arns: z.string().array().optional(),
  id: z.string().optional(),
})

export type DataAwsSsoadminPermissionSetsInputProps =
  & z.input<typeof DataAwsSsoadminPermissionSetsInputSchema>
  & NodeProps

export type DataAwsSsoadminPermissionSetsOutputProps =
  & z.output<typeof DataAwsSsoadminPermissionSetsOutputSchema>
  & z.output<typeof DataAwsSsoadminPermissionSetsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssoadmin_permission_sets

export function DataAwsSsoadminPermissionSets(
  props: Partial<DataAwsSsoadminPermissionSetsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_permission_sets'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsoadminPermissionSetsInputSchema}
      _outputSchema={DataAwsSsoadminPermissionSetsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsoadminPermissionSetss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsoadminPermissionSetsOutputProps>(
    DataAwsSsoadminPermissionSets,
    idFilter,
    baseNode,
    optional,
  )
