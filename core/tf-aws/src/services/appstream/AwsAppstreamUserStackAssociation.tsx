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

export const AwsAppstreamUserStackAssociationInputSchema = TfMetaSchema.extend({
  authentication_type: resolvableValue(z.string()),
  stack_name: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  send_email_notification: resolvableValue(z.boolean().optional()),
})

export const AwsAppstreamUserStackAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAppstreamUserStackAssociationInputProps =
  & z.input<typeof AwsAppstreamUserStackAssociationInputSchema>
  & NodeProps

export type AwsAppstreamUserStackAssociationOutputProps =
  & z.output<typeof AwsAppstreamUserStackAssociationOutputSchema>
  & z.output<typeof AwsAppstreamUserStackAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appstream_user_stack_association

export function AwsAppstreamUserStackAssociation(
  props: Partial<AwsAppstreamUserStackAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_user_stack_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppstreamUserStackAssociationInputSchema}
      _outputSchema={AwsAppstreamUserStackAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamUserStackAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppstreamUserStackAssociationOutputProps>(
    AwsAppstreamUserStackAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppstreamUserStackAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppstreamUserStackAssociationOutputProps>(
    AwsAppstreamUserStackAssociation,
    idFilter,
    baseNode,
    optional,
  )
