import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsoadminApplication } from './AwsSsoadminApplication.tsx'

export const DataAwsSsoadminApplicationInputSchema = TfMetaSchema.extend({
  application_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsoadminApplicationOutputSchema = z.object({
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

export type DataAwsSsoadminApplicationInputProps =
  & z.input<typeof DataAwsSsoadminApplicationInputSchema>
  & NodeProps

export type DataAwsSsoadminApplicationOutputProps =
  & z.output<typeof DataAwsSsoadminApplicationOutputSchema>
  & z.output<typeof DataAwsSsoadminApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssoadmin_application

export function DataAwsSsoadminApplication(
  props: Partial<DataAwsSsoadminApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsoadminApplication
      _type='aws_ssoadmin_application'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsoadminApplicationInputSchema}
      _outputSchema={DataAwsSsoadminApplicationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsoadminApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsoadminApplicationOutputProps>(
    DataAwsSsoadminApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsoadminApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsoadminApplicationOutputProps>(
    DataAwsSsoadminApplication,
    idFilter,
    baseNode,
    optional,
  )
