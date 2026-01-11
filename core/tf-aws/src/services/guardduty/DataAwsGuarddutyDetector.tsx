import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGuarddutyDetector } from './AwsGuarddutyDetector.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  features: z.object({
    additional_configuration: z.object({
      name: z.string(),
      status: z.string(),
    }).array(),
    name: z.string(),
    status: z.string(),
  }).array().optional(),
  finding_publishing_frequency: z.string().optional(),
  service_role_arn: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/guardduty_detector

export function DataAwsGuarddutyDetector(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGuarddutyDetector
      _type='aws_guardduty_detector'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGuarddutyDetector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsGuarddutyDetector,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsGuarddutyDetectors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsGuarddutyDetector,
    idFilter,
    baseNode,
    optional,
  )
