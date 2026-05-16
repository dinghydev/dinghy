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

export const AwsConfigConformancePackInputSchema = TfMetaSchema.extend({
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
})

export const AwsConfigConformancePackOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsConfigConformancePackImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigConformancePackInputProps =
  & z.input<typeof AwsConfigConformancePackInputSchema>
  & z.input<typeof AwsConfigConformancePackImportSchema>
  & NodeProps

export type AwsConfigConformancePackOutputProps =
  & z.output<typeof AwsConfigConformancePackOutputSchema>
  & z.output<typeof AwsConfigConformancePackInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_conformance_pack

export function AwsConfigConformancePack(
  props: Partial<AwsConfigConformancePackInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_conformance_pack'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigConformancePackInputSchema}
      _outputSchema={AwsConfigConformancePackOutputSchema}
      _importSchema={AwsConfigConformancePackImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigConformancePack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigConformancePackOutputProps>(
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
  useTypedNodes<AwsConfigConformancePackOutputProps>(
    AwsConfigConformancePack,
    idFilter,
    baseNode,
    optional,
  )
