import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmcontactsPlan } from './AwsSsmcontactsPlan.tsx'

export const InputSchema = z.object({
  contact_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  stage: z.object({
    duration_in_minutes: z.number(),
    target: z.object({
      channel_target_info: z.object({
        contact_channel_id: z.string(),
        retry_interval_in_minutes: z.number(),
      }).array(),
      contact_target_info: z.object({
        contact_id: z.string(),
        is_essential: z.boolean(),
      }).array(),
    }).array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssmcontacts_plan

export function DataAwsSsmcontactsPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSsmcontactsPlan
      _type='aws_ssmcontacts_plan'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmcontactsPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsSsmcontactsPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsmcontactsPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSsmcontactsPlan,
    idFilter,
    baseNode,
    optional,
  )
