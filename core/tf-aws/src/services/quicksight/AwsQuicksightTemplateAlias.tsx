import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsQuicksightTemplateAliasInputSchema = TfMetaSchema.extend({
  alias_name: resolvableValue(z.string()),
  template_id: resolvableValue(z.string()),
  template_version_number: resolvableValue(z.number()),
  aws_account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsQuicksightTemplateAliasOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsQuicksightTemplateAliasInputProps =
  & z.input<typeof AwsQuicksightTemplateAliasInputSchema>
  & NodeProps

export type AwsQuicksightTemplateAliasOutputProps =
  & z.output<typeof AwsQuicksightTemplateAliasOutputSchema>
  & z.output<typeof AwsQuicksightTemplateAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_template_alias

export function AwsQuicksightTemplateAlias(
  props: Partial<AwsQuicksightTemplateAliasInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_template_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightTemplateAliasInputSchema}
      _outputSchema={AwsQuicksightTemplateAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightTemplateAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightTemplateAliasOutputProps>(
    AwsQuicksightTemplateAlias,
    idFilter,
    baseNode,
    optional,
  )
