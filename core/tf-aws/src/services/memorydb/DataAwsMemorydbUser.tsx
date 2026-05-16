import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbUser } from './AwsMemorydbUser.tsx'

export const DataAwsMemorydbUserInputSchema = TfMetaSchema.extend({
  user_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMemorydbUserOutputSchema = z.object({
  access_string: z.string().optional(),
  arn: z.string().optional(),
  authentication_mode: z.object({
    password_count: z.number(),
    type: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  minimum_engine_version: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsMemorydbUserInputProps =
  & z.input<typeof DataAwsMemorydbUserInputSchema>
  & NodeProps

export type DataAwsMemorydbUserOutputProps =
  & z.output<typeof DataAwsMemorydbUserOutputSchema>
  & z.output<typeof DataAwsMemorydbUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/memorydb_user

export function DataAwsMemorydbUser(
  props: Partial<DataAwsMemorydbUserInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMemorydbUser
      _type='aws_memorydb_user'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMemorydbUserInputSchema}
      _outputSchema={DataAwsMemorydbUserOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMemorydbUserOutputProps>(
    DataAwsMemorydbUser,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMemorydbUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMemorydbUserOutputProps>(
    DataAwsMemorydbUser,
    idFilter,
    baseNode,
    optional,
  )
