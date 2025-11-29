import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/opensearch_package

export const InputSchema = z.object({
  package_id: resolvableValue(z.string()),
  package_name: resolvableValue(z.string()),
  package_source: resolvableValue(z.object({
    s3_bucket_name: z.string(),
    s3_key: z.string(),
  })),
  package_type: resolvableValue(z.string()),
  engine_version: resolvableValue(z.string().optional()),
  package_description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  available_package_version: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOpensearchPackage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_package'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchPackage = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsOpensearchPackage, node, id)

export const useAwsOpensearchPackages = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsOpensearchPackage, node, id)
