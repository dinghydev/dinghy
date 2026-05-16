import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectLambdaFunctionAssociation } from './AwsConnectLambdaFunctionAssociation.tsx'

export const DataAwsConnectLambdaFunctionAssociationInputSchema = TfMetaSchema
  .extend({
    function_arn: resolvableValue(z.string()),
    instance_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsConnectLambdaFunctionAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsConnectLambdaFunctionAssociationInputProps =
  & z.input<typeof DataAwsConnectLambdaFunctionAssociationInputSchema>
  & NodeProps

export type DataAwsConnectLambdaFunctionAssociationOutputProps =
  & z.output<typeof DataAwsConnectLambdaFunctionAssociationOutputSchema>
  & z.output<typeof DataAwsConnectLambdaFunctionAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_lambda_function_association

export function DataAwsConnectLambdaFunctionAssociation(
  props: Partial<DataAwsConnectLambdaFunctionAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectLambdaFunctionAssociation
      _type='aws_connect_lambda_function_association'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectLambdaFunctionAssociationInputSchema}
      _outputSchema={DataAwsConnectLambdaFunctionAssociationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectLambdaFunctionAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectLambdaFunctionAssociationOutputProps>(
    DataAwsConnectLambdaFunctionAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectLambdaFunctionAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectLambdaFunctionAssociationOutputProps>(
    DataAwsConnectLambdaFunctionAssociation,
    idFilter,
    baseNode,
    optional,
  )
