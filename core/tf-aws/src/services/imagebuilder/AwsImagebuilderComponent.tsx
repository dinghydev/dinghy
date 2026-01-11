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
  name: resolvableValue(z.string()),
  platform: resolvableValue(z.string()),
  version: resolvableValue(z.string()),
  change_description: resolvableValue(z.string().optional()),
  data: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  supported_os_versions: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  uri: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  encrypted: z.boolean().optional(),
  owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/imagebuilder_component

export function AwsImagebuilderComponent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_component'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderComponent = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsImagebuilderComponent,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderComponents = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsImagebuilderComponent,
    idFilter,
    baseNode,
    optional,
  )
