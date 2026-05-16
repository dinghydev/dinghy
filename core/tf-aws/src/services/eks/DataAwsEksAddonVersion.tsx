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

export const DataAwsEksAddonVersionInputSchema = TfMetaSchema.extend({
  addon_name: resolvableValue(z.string()),
  kubernetes_version: resolvableValue(z.string()),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEksAddonVersionOutputSchema = z.object({
  id: z.string().optional(),
  version: z.string().optional(),
})

export type DataAwsEksAddonVersionInputProps =
  & z.input<typeof DataAwsEksAddonVersionInputSchema>
  & NodeProps

export type DataAwsEksAddonVersionOutputProps =
  & z.output<typeof DataAwsEksAddonVersionOutputSchema>
  & z.output<typeof DataAwsEksAddonVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/eks_addon_version

export function DataAwsEksAddonVersion(
  props: Partial<DataAwsEksAddonVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_addon_version'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEksAddonVersionInputSchema}
      _outputSchema={DataAwsEksAddonVersionOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEksAddonVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEksAddonVersionOutputProps>(
    DataAwsEksAddonVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEksAddonVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEksAddonVersionOutputProps>(
    DataAwsEksAddonVersion,
    idFilter,
    baseNode,
    optional,
  )
