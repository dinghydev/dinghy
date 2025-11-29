import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssm_parameters_by_path

export const InputSchema = z.object({
  path: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  recursive: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  with_decryption: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  arns: z.string().array().optional(),
  names: z.string().array().optional(),
  types: z.string().array().optional(),
  values: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSsmParametersByPath(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_parameters_by_path'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsmParametersByPath = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSsmParametersByPath, node, id)

export const useDataAwsSsmParametersByPaths = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSsmParametersByPath, node, id)
