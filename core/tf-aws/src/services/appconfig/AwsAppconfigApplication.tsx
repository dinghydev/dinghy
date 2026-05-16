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

export const AwsAppconfigApplicationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppconfigApplicationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppconfigApplicationInputProps =
  & z.input<typeof AwsAppconfigApplicationInputSchema>
  & NodeProps

export type AwsAppconfigApplicationOutputProps =
  & z.output<typeof AwsAppconfigApplicationOutputSchema>
  & z.output<typeof AwsAppconfigApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appconfig_application

export function AwsAppconfigApplication(
  props: Partial<AwsAppconfigApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppconfigApplicationInputSchema}
      _outputSchema={AwsAppconfigApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppconfigApplicationOutputProps>(
    AwsAppconfigApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppconfigApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppconfigApplicationOutputProps>(
    AwsAppconfigApplication,
    idFilter,
    baseNode,
    optional,
  )
