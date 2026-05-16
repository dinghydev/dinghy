import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppconfigApplication } from './AwsAppconfigApplication.tsx'

export const DataAwsAppconfigApplicationInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAppconfigApplicationOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
})

export type DataAwsAppconfigApplicationInputProps =
  & z.input<typeof DataAwsAppconfigApplicationInputSchema>
  & NodeProps

export type DataAwsAppconfigApplicationOutputProps =
  & z.output<typeof DataAwsAppconfigApplicationOutputSchema>
  & z.output<typeof DataAwsAppconfigApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/appconfig_application

export function DataAwsAppconfigApplication(
  props: Partial<DataAwsAppconfigApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppconfigApplication
      _type='aws_appconfig_application'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAppconfigApplicationInputSchema}
      _outputSchema={DataAwsAppconfigApplicationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppconfigApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAppconfigApplicationOutputProps>(
    DataAwsAppconfigApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppconfigApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAppconfigApplicationOutputProps>(
    DataAwsAppconfigApplication,
    idFilter,
    baseNode,
    optional,
  )
