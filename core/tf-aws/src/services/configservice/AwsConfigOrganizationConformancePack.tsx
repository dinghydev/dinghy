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
  excluded_accounts: resolvableValue(z.string().array().optional()),
  input_parameter: resolvableValue(
    z.object({
      parameter_name: z.string(),
      parameter_value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  template_body: resolvableValue(z.string().optional()),
  template_s3_uri: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/config_organization_conformance_pack

export function AwsConfigOrganizationConformancePack(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_organization_conformance_pack'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigOrganizationConformancePack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsConfigOrganizationConformancePack,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigOrganizationConformancePacks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsConfigOrganizationConformancePack,
    idFilter,
    baseNode,
    optional,
  )
