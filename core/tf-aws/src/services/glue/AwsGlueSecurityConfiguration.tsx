import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_security_configuration

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
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
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueSecurityConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_security_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueSecurityConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueSecurityConfiguration, node, id)

export const useAwsGlueSecurityConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueSecurityConfiguration, node, id)
