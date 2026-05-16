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

export const AwsXrayGroupInputSchema = TfMetaSchema.extend({
  filter_expression: resolvableValue(z.string()),
  group_name: resolvableValue(z.string()),
  insights_configuration: resolvableValue(
    z.object({
      insights_enabled: z.boolean(),
      notifications_enabled: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsXrayGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsXrayGroupImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsXrayGroupInputProps =
  & z.input<typeof AwsXrayGroupInputSchema>
  & z.input<typeof AwsXrayGroupImportSchema>
  & NodeProps

export type AwsXrayGroupOutputProps =
  & z.output<typeof AwsXrayGroupOutputSchema>
  & z.output<typeof AwsXrayGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/xray_group

export function AwsXrayGroup(props: Partial<AwsXrayGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_xray_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsXrayGroupInputSchema}
      _outputSchema={AwsXrayGroupOutputSchema}
      _importSchema={AwsXrayGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsXrayGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsXrayGroupOutputProps>(
    AwsXrayGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsXrayGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsXrayGroupOutputProps>(
    AwsXrayGroup,
    idFilter,
    baseNode,
    optional,
  )
