import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsAppconfigEnvironmentsInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAppconfigEnvironmentsOutputSchema = z.object({
  environment_ids: z.set(z.string()).optional(),
})

export type DataAwsAppconfigEnvironmentsInputProps =
  & z.input<typeof DataAwsAppconfigEnvironmentsInputSchema>
  & NodeProps

export type DataAwsAppconfigEnvironmentsOutputProps =
  & z.output<typeof DataAwsAppconfigEnvironmentsOutputSchema>
  & z.output<typeof DataAwsAppconfigEnvironmentsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/appconfig_environments

export function DataAwsAppconfigEnvironments(
  props: Partial<DataAwsAppconfigEnvironmentsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_environments'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAppconfigEnvironmentsInputSchema}
      _outputSchema={DataAwsAppconfigEnvironmentsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAppconfigEnvironmentss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAppconfigEnvironmentsOutputProps>(
    DataAwsAppconfigEnvironments,
    idFilter,
    baseNode,
    optional,
  )
