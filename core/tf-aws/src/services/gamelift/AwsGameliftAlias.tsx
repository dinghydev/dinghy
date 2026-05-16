import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsGameliftAliasInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  routing_strategy: resolvableValue(z.object({
    fleet_id: z.string().optional(),
    message: z.string().optional(),
    type: z.string(),
  })),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGameliftAliasOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGameliftAliasInputProps =
  & z.input<typeof AwsGameliftAliasInputSchema>
  & NodeProps

export type AwsGameliftAliasOutputProps =
  & z.output<typeof AwsGameliftAliasOutputSchema>
  & z.output<typeof AwsGameliftAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/gamelift_alias

export function AwsGameliftAlias(props: Partial<AwsGameliftAliasInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_gamelift_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGameliftAliasInputSchema}
      _outputSchema={AwsGameliftAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsGameliftAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGameliftAliasOutputProps>(
    AwsGameliftAlias,
    idFilter,
    baseNode,
    optional,
  )
