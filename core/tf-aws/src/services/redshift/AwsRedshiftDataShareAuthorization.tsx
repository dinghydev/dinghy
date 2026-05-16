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

export const AwsRedshiftDataShareAuthorizationInputSchema = TfMetaSchema.extend(
  {
    consumer_identifier: resolvableValue(z.string()),
    data_share_arn: resolvableValue(z.string()),
    allow_writes: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsRedshiftDataShareAuthorizationOutputSchema = z.object({
  id: z.string().optional(),
  managed_by: z.string().optional(),
  producer_arn: z.string().optional(),
})

export type AwsRedshiftDataShareAuthorizationInputProps =
  & z.input<typeof AwsRedshiftDataShareAuthorizationInputSchema>
  & NodeProps

export type AwsRedshiftDataShareAuthorizationOutputProps =
  & z.output<typeof AwsRedshiftDataShareAuthorizationOutputSchema>
  & z.output<typeof AwsRedshiftDataShareAuthorizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_authorization

export function AwsRedshiftDataShareAuthorization(
  props: Partial<AwsRedshiftDataShareAuthorizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_data_share_authorization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftDataShareAuthorizationInputSchema}
      _outputSchema={AwsRedshiftDataShareAuthorizationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftDataShareAuthorization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftDataShareAuthorizationOutputProps>(
    AwsRedshiftDataShareAuthorization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftDataShareAuthorizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftDataShareAuthorizationOutputProps>(
    AwsRedshiftDataShareAuthorization,
    idFilter,
    baseNode,
    optional,
  )
