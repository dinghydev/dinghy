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

export const InputSchema = TfMetaSchema.extend({
  email: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  organization_id: resolvableValue(z.string()),
  hidden_from_global_address_list: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  disabled_date: z.string().optional(),
  enabled_date: z.string().optional(),
  group_id: z.string().optional(),
  state: z.string().optional(),
})

export const ImportSchema = z.object({
  group_id: resolvableValue(z.string()),
  organization_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workmail_group

export function AwsWorkmailGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workmail_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsWorkmailGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsWorkmailGroup, idFilter, baseNode, optional)

export const useAwsWorkmailGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsWorkmailGroup, idFilter, baseNode, optional)
