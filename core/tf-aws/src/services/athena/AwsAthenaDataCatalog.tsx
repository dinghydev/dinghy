import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/athena_data_catalog

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  description: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  parameters: resolvableValue(z.record(z.string(), z.string())),
  type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAthenaDataCatalog(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_data_catalog'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaDataCatalog = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAthenaDataCatalog, node, id)

export const useAwsAthenaDataCatalogs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAthenaDataCatalog, node, id)
