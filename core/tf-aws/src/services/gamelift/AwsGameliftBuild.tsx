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

export const AwsGameliftBuildInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  operating_system: resolvableValue(z.string()),
  storage_location: resolvableValue(z.object({
    bucket: z.string(),
    key: z.string(),
    object_version: z.string().optional(),
    role_arn: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  version: resolvableValue(z.string().optional()),
})

export const AwsGameliftBuildOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGameliftBuildInputProps =
  & z.input<typeof AwsGameliftBuildInputSchema>
  & NodeProps

export type AwsGameliftBuildOutputProps =
  & z.output<typeof AwsGameliftBuildOutputSchema>
  & z.output<typeof AwsGameliftBuildInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/gamelift_build

export function AwsGameliftBuild(props: Partial<AwsGameliftBuildInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_gamelift_build'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGameliftBuildInputSchema}
      _outputSchema={AwsGameliftBuildOutputSchema}
      {...props}
    />
  )
}

export const useAwsGameliftBuild = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGameliftBuildOutputProps>(
    AwsGameliftBuild,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGameliftBuilds = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGameliftBuildOutputProps>(
    AwsGameliftBuild,
    idFilter,
    baseNode,
    optional,
  )
