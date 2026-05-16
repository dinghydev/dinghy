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

export const AwsInspectorResourceGroupInputSchema = TfMetaSchema.extend({
  tags: resolvableValue(z.record(z.string(), z.string())),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsInspectorResourceGroupOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsInspectorResourceGroupImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsInspectorResourceGroupInputProps =
  & z.input<typeof AwsInspectorResourceGroupInputSchema>
  & z.input<typeof AwsInspectorResourceGroupImportSchema>
  & NodeProps

export type AwsInspectorResourceGroupOutputProps =
  & z.output<typeof AwsInspectorResourceGroupOutputSchema>
  & z.output<typeof AwsInspectorResourceGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/inspector_resource_group

export function AwsInspectorResourceGroup(
  props: Partial<AwsInspectorResourceGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector_resource_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInspectorResourceGroupInputSchema}
      _outputSchema={AwsInspectorResourceGroupOutputSchema}
      _importSchema={AwsInspectorResourceGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsInspectorResourceGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInspectorResourceGroupOutputProps>(
    AwsInspectorResourceGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInspectorResourceGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInspectorResourceGroupOutputProps>(
    AwsInspectorResourceGroup,
    idFilter,
    baseNode,
    optional,
  )
