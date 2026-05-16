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

export const AwsApprunnerConnectionInputSchema = TfMetaSchema.extend({
  connection_name: resolvableValue(z.string()),
  provider_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApprunnerConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsApprunnerConnectionInputProps =
  & z.input<typeof AwsApprunnerConnectionInputSchema>
  & NodeProps

export type AwsApprunnerConnectionOutputProps =
  & z.output<typeof AwsApprunnerConnectionOutputSchema>
  & z.output<typeof AwsApprunnerConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apprunner_connection

export function AwsApprunnerConnection(
  props: Partial<AwsApprunnerConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApprunnerConnectionInputSchema}
      _outputSchema={AwsApprunnerConnectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApprunnerConnectionOutputProps>(
    AwsApprunnerConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApprunnerConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApprunnerConnectionOutputProps>(
    AwsApprunnerConnection,
    idFilter,
    baseNode,
    optional,
  )
