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

export const AwsSsmPatchGroupInputSchema = TfMetaSchema.extend({
  baseline_id: resolvableValue(z.string()),
  patch_group: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSsmPatchGroupOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsSsmPatchGroupImportSchema = z.object({
  baseline_id: resolvableValue(z.string()),
  patch_group: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsmPatchGroupInputProps =
  & z.input<typeof AwsSsmPatchGroupInputSchema>
  & z.input<typeof AwsSsmPatchGroupImportSchema>
  & NodeProps

export type AwsSsmPatchGroupOutputProps =
  & z.output<typeof AwsSsmPatchGroupOutputSchema>
  & z.output<typeof AwsSsmPatchGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_patch_group

export function AwsSsmPatchGroup(props: Partial<AwsSsmPatchGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_patch_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmPatchGroupInputSchema}
      _outputSchema={AwsSsmPatchGroupOutputSchema}
      _importSchema={AwsSsmPatchGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmPatchGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmPatchGroupOutputProps>(
    AwsSsmPatchGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmPatchGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmPatchGroupOutputProps>(
    AwsSsmPatchGroup,
    idFilter,
    baseNode,
    optional,
  )
