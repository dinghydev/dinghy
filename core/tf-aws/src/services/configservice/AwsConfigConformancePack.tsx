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
  delivery_s3_bucket: resolvableValue(z.string().optional()),
  delivery_s3_key_prefix: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  input_parameter: resolvableValue(
    z.object({
      parameter_name: z.string(),
      parameter_value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  template_body: resolvableValue(z.string().optional()),
  template_s3_uri: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/config_conformance_pack

export function AwsConfigConformancePack(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_conformance_pack'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigConformancePack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsConfigConformancePack,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigConformancePacks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsConfigConformancePack,
    idFilter,
    baseNode,
    optional,
  )
