import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOamSinksInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsOamSinksOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
})

export type DataAwsOamSinksInputProps =
  & z.input<typeof DataAwsOamSinksInputSchema>
  & NodeProps

export type DataAwsOamSinksOutputProps =
  & z.output<typeof DataAwsOamSinksOutputSchema>
  & z.output<typeof DataAwsOamSinksInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/oam_sinks

export function DataAwsOamSinks(props: Partial<DataAwsOamSinksInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_oam_sinks'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOamSinksInputSchema}
      _outputSchema={DataAwsOamSinksOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOamSinkss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOamSinksOutputProps>(
    DataAwsOamSinks,
    idFilter,
    baseNode,
    optional,
  )
