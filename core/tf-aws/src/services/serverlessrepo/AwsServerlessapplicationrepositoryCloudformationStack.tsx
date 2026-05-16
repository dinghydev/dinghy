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

export const AwsServerlessapplicationrepositoryCloudformationStackInputSchema =
  TfMetaSchema.extend({
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
  })

export const AwsServerlessapplicationrepositoryCloudformationStackOutputSchema =
  z.object({
    id: z.string().optional(),
    outputs: z.record(z.string(), z.string()).optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
  })

export type AwsServerlessapplicationrepositoryCloudformationStackInputProps =
  & z.input<
    typeof AwsServerlessapplicationrepositoryCloudformationStackInputSchema
  >
  & NodeProps

export type AwsServerlessapplicationrepositoryCloudformationStackOutputProps =
  & z.output<
    typeof AwsServerlessapplicationrepositoryCloudformationStackOutputSchema
  >
  & z.output<
    typeof AwsServerlessapplicationrepositoryCloudformationStackInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/serverlessapplicationrepository_cloudformation_stack

export function AwsServerlessapplicationrepositoryCloudformationStack(
  props: Partial<
    AwsServerlessapplicationrepositoryCloudformationStackInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_serverlessapplicationrepository_cloudformation_stack'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServerlessapplicationrepositoryCloudformationStackInputSchema}
      _outputSchema={AwsServerlessapplicationrepositoryCloudformationStackOutputSchema}
      {...props}
    />
  )
}

export const useAwsServerlessapplicationrepositoryCloudformationStack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<
    AwsServerlessapplicationrepositoryCloudformationStackOutputProps
  >(
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
  useTypedNodes<
    AwsServerlessapplicationrepositoryCloudformationStackOutputProps
  >(
    AwsServerlessapplicationrepositoryCloudformationStack,
    idFilter,
    baseNode,
    optional,
  )
