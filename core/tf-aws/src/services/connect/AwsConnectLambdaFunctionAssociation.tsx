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

export const AwsConnectLambdaFunctionAssociationInputSchema = TfMetaSchema
  .extend({
    function_arn: resolvableValue(z.string()),
    instance_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsConnectLambdaFunctionAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsConnectLambdaFunctionAssociationInputProps =
  & z.input<typeof AwsConnectLambdaFunctionAssociationInputSchema>
  & NodeProps

export type AwsConnectLambdaFunctionAssociationOutputProps =
  & z.output<typeof AwsConnectLambdaFunctionAssociationOutputSchema>
  & z.output<typeof AwsConnectLambdaFunctionAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_lambda_function_association

export function AwsConnectLambdaFunctionAssociation(
  props: Partial<AwsConnectLambdaFunctionAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_lambda_function_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectLambdaFunctionAssociationInputSchema}
      _outputSchema={AwsConnectLambdaFunctionAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectLambdaFunctionAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectLambdaFunctionAssociationOutputProps>(
    AwsConnectLambdaFunctionAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectLambdaFunctionAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectLambdaFunctionAssociationOutputProps>(
    AwsConnectLambdaFunctionAssociation,
    idFilter,
    baseNode,
    optional,
  )
