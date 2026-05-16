import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsElbServiceAccountInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsElbServiceAccountOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsElbServiceAccountInputProps =
  & z.input<typeof DataAwsElbServiceAccountInputSchema>
  & NodeProps

export type DataAwsElbServiceAccountOutputProps =
  & z.output<typeof DataAwsElbServiceAccountOutputSchema>
  & z.output<typeof DataAwsElbServiceAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/elb_service_account

export function DataAwsElbServiceAccount(
  props: Partial<DataAwsElbServiceAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elb_service_account'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsElbServiceAccountInputSchema}
      _outputSchema={DataAwsElbServiceAccountOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsElbServiceAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsElbServiceAccountOutputProps>(
    DataAwsElbServiceAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElbServiceAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsElbServiceAccountOutputProps>(
    DataAwsElbServiceAccount,
    idFilter,
    baseNode,
    optional,
  )
