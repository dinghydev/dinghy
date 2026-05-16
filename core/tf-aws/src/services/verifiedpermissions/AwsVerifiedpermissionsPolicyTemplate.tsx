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

export const AwsVerifiedpermissionsPolicyTemplateInputSchema = TfMetaSchema
  .extend({
    policy_store_id: resolvableValue(z.string()),
    statement: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsVerifiedpermissionsPolicyTemplateOutputSchema = z.object({
  created_date: z.string().optional(),
  id: z.string().optional(),
  policy_template_id: z.string().optional(),
})

export type AwsVerifiedpermissionsPolicyTemplateInputProps =
  & z.input<typeof AwsVerifiedpermissionsPolicyTemplateInputSchema>
  & NodeProps

export type AwsVerifiedpermissionsPolicyTemplateOutputProps =
  & z.output<typeof AwsVerifiedpermissionsPolicyTemplateOutputSchema>
  & z.output<typeof AwsVerifiedpermissionsPolicyTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/verifiedpermissions_policy_template

export function AwsVerifiedpermissionsPolicyTemplate(
  props: Partial<AwsVerifiedpermissionsPolicyTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedpermissions_policy_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVerifiedpermissionsPolicyTemplateInputSchema}
      _outputSchema={AwsVerifiedpermissionsPolicyTemplateOutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedpermissionsPolicyTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVerifiedpermissionsPolicyTemplateOutputProps>(
    AwsVerifiedpermissionsPolicyTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedpermissionsPolicyTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVerifiedpermissionsPolicyTemplateOutputProps>(
    AwsVerifiedpermissionsPolicyTemplate,
    idFilter,
    baseNode,
    optional,
  )
