import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsPollyVoicesInputSchema = TfMetaSchema.extend({
  engine: resolvableValue(z.string().optional()),
  include_additional_language_codes: resolvableValue(z.boolean().optional()),
  language_code: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsPollyVoicesOutputSchema = z.object({
  id: z.string().optional(),
  voices: z.object({
    additional_language_codes: z.string().array().optional(),
    gender: z.string().optional(),
    id: z.string().optional(),
    language_code: z.string().optional(),
    language_name: z.string().optional(),
    name: z.string().optional(),
    supported_engines: z.string().array().optional(),
  }).array().optional().optional(),
})

export type DataAwsPollyVoicesInputProps =
  & z.input<typeof DataAwsPollyVoicesInputSchema>
  & NodeProps

export type DataAwsPollyVoicesOutputProps =
  & z.output<typeof DataAwsPollyVoicesOutputSchema>
  & z.output<typeof DataAwsPollyVoicesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/polly_voices

export function DataAwsPollyVoices(
  props: Partial<DataAwsPollyVoicesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_polly_voices'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsPollyVoicesInputSchema}
      _outputSchema={DataAwsPollyVoicesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPollyVoicess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsPollyVoicesOutputProps>(
    DataAwsPollyVoices,
    idFilter,
    baseNode,
    optional,
  )
