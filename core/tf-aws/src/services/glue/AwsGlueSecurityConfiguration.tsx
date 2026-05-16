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

export const AwsGlueSecurityConfigurationInputSchema = TfMetaSchema.extend({
  encryption_configuration: resolvableValue(z.object({
    cloudwatch_encryption: z.object({
      cloudwatch_encryption_mode: z.string().optional(),
      kms_key_arn: z.string().optional(),
    }),
    job_bookmarks_encryption: z.object({
      job_bookmarks_encryption_mode: z.string().optional(),
      kms_key_arn: z.string().optional(),
    }),
    s3_encryption: z.object({
      kms_key_arn: z.string().optional(),
      s3_encryption_mode: z.string().optional(),
    }),
  })),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsGlueSecurityConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsGlueSecurityConfigurationInputProps =
  & z.input<typeof AwsGlueSecurityConfigurationInputSchema>
  & NodeProps

export type AwsGlueSecurityConfigurationOutputProps =
  & z.output<typeof AwsGlueSecurityConfigurationOutputSchema>
  & z.output<typeof AwsGlueSecurityConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_security_configuration

export function AwsGlueSecurityConfiguration(
  props: Partial<AwsGlueSecurityConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_security_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueSecurityConfigurationInputSchema}
      _outputSchema={AwsGlueSecurityConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueSecurityConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueSecurityConfigurationOutputProps>(
    AwsGlueSecurityConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueSecurityConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueSecurityConfigurationOutputProps>(
    AwsGlueSecurityConfiguration,
    idFilter,
    baseNode,
    optional,
  )
