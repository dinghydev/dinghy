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

export const AwsM2ApplicationInputSchema = TfMetaSchema.extend({
  engine_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  definition: resolvableValue(
    z.object({
      content: z.string().optional(),
      s3_location: z.string().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsM2ApplicationOutputSchema = z.object({
  application_id: z.string().optional(),
  arn: z.string().optional(),
  current_version: z.number().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsM2ApplicationInputProps =
  & z.input<typeof AwsM2ApplicationInputSchema>
  & NodeProps

export type AwsM2ApplicationOutputProps =
  & z.output<typeof AwsM2ApplicationOutputSchema>
  & z.output<typeof AwsM2ApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/m2_application

export function AwsM2Application(props: Partial<AwsM2ApplicationInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_m2_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsM2ApplicationInputSchema}
      _outputSchema={AwsM2ApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsM2Application = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsM2ApplicationOutputProps>(
    AwsM2Application,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsM2Applications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsM2ApplicationOutputProps>(
    AwsM2Application,
    idFilter,
    baseNode,
    optional,
  )
