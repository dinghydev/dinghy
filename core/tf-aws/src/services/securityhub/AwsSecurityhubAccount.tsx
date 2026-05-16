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

export const AwsSecurityhubAccountInputSchema = TfMetaSchema.extend({
  auto_enable_controls: resolvableValue(z.boolean().optional()),
  control_finding_generator: resolvableValue(z.string().optional()),
  enable_default_standards: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSecurityhubAccountOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSecurityhubAccountInputProps =
  & z.input<typeof AwsSecurityhubAccountInputSchema>
  & NodeProps

export type AwsSecurityhubAccountOutputProps =
  & z.output<typeof AwsSecurityhubAccountOutputSchema>
  & z.output<typeof AwsSecurityhubAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_account

export function AwsSecurityhubAccount(
  props: Partial<AwsSecurityhubAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubAccountInputSchema}
      _outputSchema={AwsSecurityhubAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubAccountOutputProps>(
    AwsSecurityhubAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubAccountOutputProps>(
    AwsSecurityhubAccount,
    idFilter,
    baseNode,
    optional,
  )
