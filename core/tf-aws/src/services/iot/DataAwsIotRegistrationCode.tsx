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

export const DataAwsIotRegistrationCodeInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsIotRegistrationCodeOutputSchema = z.object({
  registration_code: z.string().optional(),
})

export type DataAwsIotRegistrationCodeInputProps =
  & z.input<typeof DataAwsIotRegistrationCodeInputSchema>
  & NodeProps

export type DataAwsIotRegistrationCodeOutputProps =
  & z.output<typeof DataAwsIotRegistrationCodeOutputSchema>
  & z.output<typeof DataAwsIotRegistrationCodeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iot_registration_code

export function DataAwsIotRegistrationCode(
  props: Partial<DataAwsIotRegistrationCodeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_registration_code'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIotRegistrationCodeInputSchema}
      _outputSchema={DataAwsIotRegistrationCodeOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIotRegistrationCode = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIotRegistrationCodeOutputProps>(
    DataAwsIotRegistrationCode,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIotRegistrationCodes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIotRegistrationCodeOutputProps>(
    DataAwsIotRegistrationCode,
    idFilter,
    baseNode,
    optional,
  )
