import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/gamelift_build

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  operating_system: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  storage_location: resolvableValue(z.object({
    bucket: z.string(),
    key: z.string(),
    object_version: z.string().optional(),
    role_arn: z.string(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGameliftBuild(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_gamelift_build'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGameliftBuild = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGameliftBuild, node, id)

export const useAwsGameliftBuilds = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGameliftBuild, node, id)
