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

export const AwsImagebuilderComponentInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  platform: resolvableValue(z.string()),
  version: resolvableValue(z.string()),
  change_description: resolvableValue(z.string().optional()),
  data: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  supported_os_versions: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  uri: resolvableValue(z.string().optional()),
})

export const AwsImagebuilderComponentOutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  encrypted: z.boolean().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type AwsImagebuilderComponentInputProps =
  & z.input<typeof AwsImagebuilderComponentInputSchema>
  & NodeProps

export type AwsImagebuilderComponentOutputProps =
  & z.output<typeof AwsImagebuilderComponentOutputSchema>
  & z.output<typeof AwsImagebuilderComponentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/imagebuilder_component

export function AwsImagebuilderComponent(
  props: Partial<AwsImagebuilderComponentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_component'
      _category='resource'
      _title={_title}
      _inputSchema={AwsImagebuilderComponentInputSchema}
      _outputSchema={AwsImagebuilderComponentOutputSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderComponent = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsImagebuilderComponentOutputProps>(
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
  useTypedNodes<AwsImagebuilderComponentOutputProps>(
    AwsImagebuilderComponent,
    idFilter,
    baseNode,
    optional,
  )
