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

export const AwsSsoadminApplicationInputSchema = TfMetaSchema.extend({
  application_provider_arn: resolvableValue(z.string()),
  instance_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  client_token: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  portal_options: resolvableValue(
    z.object({
      visibility: z.string().optional(),
      sign_in_options: z.object({
        application_url: z.string().optional(),
        origin: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSsoadminApplicationOutputSchema = z.object({
  application_account: z.string().optional(),
  application_arn: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSsoadminApplicationImportSchema = z.object({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsoadminApplicationInputProps =
  & z.input<typeof AwsSsoadminApplicationInputSchema>
  & z.input<typeof AwsSsoadminApplicationImportSchema>
  & NodeProps

export type AwsSsoadminApplicationOutputProps =
  & z.output<typeof AwsSsoadminApplicationOutputSchema>
  & z.output<typeof AwsSsoadminApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_application

export function AwsSsoadminApplication(
  props: Partial<AwsSsoadminApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminApplicationInputSchema}
      _outputSchema={AwsSsoadminApplicationOutputSchema}
      _importSchema={AwsSsoadminApplicationImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminApplicationOutputProps>(
    AwsSsoadminApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminApplicationOutputProps>(
    AwsSsoadminApplication,
    idFilter,
    baseNode,
    optional,
  )
