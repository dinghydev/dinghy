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

export const AwsQuicksightKeyRegistrationInputSchema = TfMetaSchema.extend({
  aws_account_id: resolvableValue(z.string().optional()),
  key_registration: resolvableValue(
    z.object({
      default_key: z.boolean().optional(),
      key_arn: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsQuicksightKeyRegistrationOutputSchema = z.object({})

export type AwsQuicksightKeyRegistrationInputProps =
  & z.input<typeof AwsQuicksightKeyRegistrationInputSchema>
  & NodeProps

export type AwsQuicksightKeyRegistrationOutputProps =
  & z.output<typeof AwsQuicksightKeyRegistrationOutputSchema>
  & z.output<typeof AwsQuicksightKeyRegistrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_key_registration

export function AwsQuicksightKeyRegistration(
  props: Partial<AwsQuicksightKeyRegistrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_key_registration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightKeyRegistrationInputSchema}
      _outputSchema={AwsQuicksightKeyRegistrationOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightKeyRegistration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightKeyRegistrationOutputProps>(
    AwsQuicksightKeyRegistration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightKeyRegistrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightKeyRegistrationOutputProps>(
    AwsQuicksightKeyRegistration,
    idFilter,
    baseNode,
    optional,
  )
