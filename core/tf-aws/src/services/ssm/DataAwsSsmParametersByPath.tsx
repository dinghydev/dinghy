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

export const DataAwsSsmParametersByPathInputSchema = TfMetaSchema.extend({
  path: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  recursive: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  with_decryption: resolvableValue(z.boolean().optional()),
})

export const DataAwsSsmParametersByPathOutputSchema = z.object({
  arns: z.string().array().optional(),
  names: z.string().array().optional(),
  types: z.string().array().optional(),
  values: z.string().array().optional(),
})

export type DataAwsSsmParametersByPathInputProps =
  & z.input<typeof DataAwsSsmParametersByPathInputSchema>
  & NodeProps

export type DataAwsSsmParametersByPathOutputProps =
  & z.output<typeof DataAwsSsmParametersByPathOutputSchema>
  & z.output<typeof DataAwsSsmParametersByPathInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssm_parameters_by_path

export function DataAwsSsmParametersByPath(
  props: Partial<DataAwsSsmParametersByPathInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_parameters_by_path'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmParametersByPathInputSchema}
      _outputSchema={DataAwsSsmParametersByPathOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsmParametersByPath = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsmParametersByPathOutputProps>(
    DataAwsSsmParametersByPath,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsmParametersByPaths = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmParametersByPathOutputProps>(
    DataAwsSsmParametersByPath,
    idFilter,
    baseNode,
    optional,
  )
