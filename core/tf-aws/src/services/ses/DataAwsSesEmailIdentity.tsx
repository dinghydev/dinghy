import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesEmailIdentity } from './AwsSesEmailIdentity.tsx'

export const DataAwsSesEmailIdentityInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSesEmailIdentityOutputSchema = z.object({
  arn: z.string().optional(),
  email: z.string().optional(),
})

export type DataAwsSesEmailIdentityInputProps =
  & z.input<typeof DataAwsSesEmailIdentityInputSchema>
  & NodeProps

export type DataAwsSesEmailIdentityOutputProps =
  & z.output<typeof DataAwsSesEmailIdentityOutputSchema>
  & z.output<typeof DataAwsSesEmailIdentityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ses_email_identity

export function DataAwsSesEmailIdentity(
  props: Partial<DataAwsSesEmailIdentityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSesEmailIdentity
      _type='aws_ses_email_identity'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSesEmailIdentityInputSchema}
      _outputSchema={DataAwsSesEmailIdentityOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesEmailIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSesEmailIdentityOutputProps>(
    DataAwsSesEmailIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSesEmailIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSesEmailIdentityOutputProps>(
    DataAwsSesEmailIdentity,
    idFilter,
    baseNode,
    optional,
  )
