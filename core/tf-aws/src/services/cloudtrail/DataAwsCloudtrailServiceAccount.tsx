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

export const DataAwsCloudtrailServiceAccountInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCloudtrailServiceAccountOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsCloudtrailServiceAccountInputProps =
  & z.input<typeof DataAwsCloudtrailServiceAccountInputSchema>
  & NodeProps

export type DataAwsCloudtrailServiceAccountOutputProps =
  & z.output<typeof DataAwsCloudtrailServiceAccountOutputSchema>
  & z.output<typeof DataAwsCloudtrailServiceAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudtrail_service_account

export function DataAwsCloudtrailServiceAccount(
  props: Partial<DataAwsCloudtrailServiceAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudtrail_service_account'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudtrailServiceAccountInputSchema}
      _outputSchema={DataAwsCloudtrailServiceAccountOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudtrailServiceAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudtrailServiceAccountOutputProps>(
    DataAwsCloudtrailServiceAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudtrailServiceAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudtrailServiceAccountOutputProps>(
    DataAwsCloudtrailServiceAccount,
    idFilter,
    baseNode,
    optional,
  )
