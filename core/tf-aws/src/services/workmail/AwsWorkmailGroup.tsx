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

export const AwsWorkmailGroupInputSchema = TfMetaSchema.extend({
  email: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  organization_id: resolvableValue(z.string()),
  hidden_from_global_address_list: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsWorkmailGroupOutputSchema = z.object({
  disabled_date: z.string().optional(),
  enabled_date: z.string().optional(),
  group_id: z.string().optional(),
  state: z.string().optional(),
})

export const AwsWorkmailGroupImportSchema = z.object({
  group_id: resolvableValue(z.string()),
  organization_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsWorkmailGroupInputProps =
  & z.input<typeof AwsWorkmailGroupInputSchema>
  & z.input<typeof AwsWorkmailGroupImportSchema>
  & NodeProps

export type AwsWorkmailGroupOutputProps =
  & z.output<typeof AwsWorkmailGroupOutputSchema>
  & z.output<typeof AwsWorkmailGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workmail_group

export function AwsWorkmailGroup(props: Partial<AwsWorkmailGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workmail_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkmailGroupInputSchema}
      _outputSchema={AwsWorkmailGroupOutputSchema}
      _importSchema={AwsWorkmailGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsWorkmailGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkmailGroupOutputProps>(
    AwsWorkmailGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkmailGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkmailGroupOutputProps>(
    AwsWorkmailGroup,
    idFilter,
    baseNode,
    optional,
  )
