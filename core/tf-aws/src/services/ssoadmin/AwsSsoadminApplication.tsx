import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssoadmin_application

export const InputSchema = z.object({
  application_provider_arn: resolvableValue(z.string()),
  instance_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  client_token: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  portal_options: resolvableValue(
    z.object({
      visibility: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  application_account: z.string().optional(),
  application_arn: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsoadminApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminApplication = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsoadminApplication, node, id)

export const useAwsSsoadminApplications = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsoadminApplication, node, id)
