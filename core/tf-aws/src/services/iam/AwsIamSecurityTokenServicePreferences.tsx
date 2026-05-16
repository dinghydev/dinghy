import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsIamSecurityTokenServicePreferencesInputSchema = TfMetaSchema
  .extend({
    global_endpoint_token_version: resolvableValue(z.string()),
  })

export const AwsIamSecurityTokenServicePreferencesOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsIamSecurityTokenServicePreferencesInputProps =
  & z.input<typeof AwsIamSecurityTokenServicePreferencesInputSchema>
  & NodeProps

export type AwsIamSecurityTokenServicePreferencesOutputProps =
  & z.output<typeof AwsIamSecurityTokenServicePreferencesOutputSchema>
  & z.output<typeof AwsIamSecurityTokenServicePreferencesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_security_token_service_preferences

export function AwsIamSecurityTokenServicePreferences(
  props: Partial<AwsIamSecurityTokenServicePreferencesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_security_token_service_preferences'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamSecurityTokenServicePreferencesInputSchema}
      _outputSchema={AwsIamSecurityTokenServicePreferencesOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamSecurityTokenServicePreferencess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamSecurityTokenServicePreferencesOutputProps>(
    AwsIamSecurityTokenServicePreferences,
    idFilter,
    baseNode,
    optional,
  )
