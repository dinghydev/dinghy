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

export const AwsMemorydbUserInputSchema = TfMetaSchema.extend({
  access_string: resolvableValue(z.string()),
  authentication_mode: resolvableValue(z.object({
    password_count: z.number().optional(),
    passwords: z.string().array().optional(),
    type: z.string(),
  })),
  user_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMemorydbUserOutputSchema = z.object({
  arn: z.string().optional(),
  authentication_mode: z.object({
    password_count: z.number().optional(),
    passwords: z.set(z.string()).optional(),
    type: z.string(),
  }).optional(),
  id: z.string().optional(),
  minimum_engine_version: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMemorydbUserInputProps =
  & z.input<typeof AwsMemorydbUserInputSchema>
  & NodeProps

export type AwsMemorydbUserOutputProps =
  & z.output<typeof AwsMemorydbUserOutputSchema>
  & z.output<typeof AwsMemorydbUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/memorydb_user

export function AwsMemorydbUser(props: Partial<AwsMemorydbUserInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_memorydb_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMemorydbUserInputSchema}
      _outputSchema={AwsMemorydbUserOutputSchema}
      {...props}
    />
  )
}

export const useAwsMemorydbUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMemorydbUserOutputProps>(
    AwsMemorydbUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMemorydbUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMemorydbUserOutputProps>(
    AwsMemorydbUser,
    idFilter,
    baseNode,
    optional,
  )
