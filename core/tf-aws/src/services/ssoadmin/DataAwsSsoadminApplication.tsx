import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsoadminApplication } from './AwsSsoadminApplication.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssoadmin_application

export const InputSchema = z.object({
  application_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  application_account: z.string().optional(),
  application_provider_arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  instance_arn: z.string().optional(),
  name: z.string().optional(),
  portal_options: z.object({
    sign_in_options: z.object({
      application_url: z.string(),
      origin: z.string(),
    }).array(),
    visibility: z.string(),
  }).array().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSsoadminApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSsoadminApplication
      _type='aws_ssoadmin_application'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsoadminApplication = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSsoadminApplication, node, id)

export const useDataAwsSsoadminApplications = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSsoadminApplication, node, id)
