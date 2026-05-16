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

export const AwsSesEmailIdentityInputSchema = TfMetaSchema.extend({
  email: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesEmailIdentityOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsSesEmailIdentityInputProps =
  & z.input<typeof AwsSesEmailIdentityInputSchema>
  & NodeProps

export type AwsSesEmailIdentityOutputProps =
  & z.output<typeof AwsSesEmailIdentityOutputSchema>
  & z.output<typeof AwsSesEmailIdentityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_email_identity

export function AwsSesEmailIdentity(
  props: Partial<AwsSesEmailIdentityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_email_identity'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesEmailIdentityInputSchema}
      _outputSchema={AwsSesEmailIdentityOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesEmailIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesEmailIdentityOutputProps>(
    AwsSesEmailIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesEmailIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesEmailIdentityOutputProps>(
    AwsSesEmailIdentity,
    idFilter,
    baseNode,
    optional,
  )
