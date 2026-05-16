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

export const DataAwsGuarddutyDetectorInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsGuarddutyDetectorOutputSchema = z.object({
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

export type DataAwsGuarddutyDetectorInputProps =
  & z.input<typeof DataAwsGuarddutyDetectorInputSchema>
  & NodeProps

export type DataAwsGuarddutyDetectorOutputProps =
  & z.output<typeof DataAwsGuarddutyDetectorOutputSchema>
  & z.output<typeof DataAwsGuarddutyDetectorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/guardduty_detector

export function DataAwsGuarddutyDetector(
  props: Partial<DataAwsGuarddutyDetectorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGuarddutyDetector
      _type='aws_guardduty_detector'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsGuarddutyDetectorInputSchema}
      _outputSchema={DataAwsGuarddutyDetectorOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGuarddutyDetector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsGuarddutyDetectorOutputProps>(
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
  useTypedNodes<DataAwsGuarddutyDetectorOutputProps>(
    DataAwsGuarddutyDetector,
    idFilter,
    baseNode,
    optional,
  )
