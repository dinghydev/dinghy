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

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  capabilities: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  semantic_version: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  outputs: z.record(z.string(), z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/serverlessapplicationrepository_cloudformation_stack

export function AwsServerlessapplicationrepositoryCloudformationStack(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_serverlessapplicationrepository_cloudformation_stack'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServerlessapplicationrepositoryCloudformationStack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsServerlessapplicationrepositoryCloudformationStack,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServerlessapplicationrepositoryCloudformationStacks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsServerlessapplicationrepositoryCloudformationStack,
    idFilter,
    baseNode,
    optional,
  )
