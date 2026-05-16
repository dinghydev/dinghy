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

export const AwsConnectPhoneNumberInputSchema = TfMetaSchema.extend({
  country_code: resolvableValue(z.string()),
  target_arn: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsConnectPhoneNumberOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  phone_number: z.string().optional(),
  status: z.object({
    message: z.string(),
    status: z.string(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsConnectPhoneNumberImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConnectPhoneNumberInputProps =
  & z.input<typeof AwsConnectPhoneNumberInputSchema>
  & z.input<typeof AwsConnectPhoneNumberImportSchema>
  & NodeProps

export type AwsConnectPhoneNumberOutputProps =
  & z.output<typeof AwsConnectPhoneNumberOutputSchema>
  & z.output<typeof AwsConnectPhoneNumberInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_phone_number

export function AwsConnectPhoneNumber(
  props: Partial<AwsConnectPhoneNumberInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_phone_number'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectPhoneNumberInputSchema}
      _outputSchema={AwsConnectPhoneNumberOutputSchema}
      _importSchema={AwsConnectPhoneNumberImportSchema}
      {...props}
    />
  )
}

export const useAwsConnectPhoneNumber = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectPhoneNumberOutputProps>(
    AwsConnectPhoneNumber,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectPhoneNumbers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectPhoneNumberOutputProps>(
    AwsConnectPhoneNumber,
    idFilter,
    baseNode,
    optional,
  )
