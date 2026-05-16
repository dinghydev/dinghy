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

export const DataAwsServerlessapplicationrepositoryApplicationInputSchema =
  TfMetaSchema.extend({
    application_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    semantic_version: resolvableValue(z.string().optional()),
  })

export const DataAwsServerlessapplicationrepositoryApplicationOutputSchema = z
  .object({
    application_id: z.string().optional(),
    name: z.string().optional(),
    required_capabilities: z.set(z.string()).optional(),
    source_code_url: z.string().optional(),
    template_url: z.string().optional(),
  })

export type DataAwsServerlessapplicationrepositoryApplicationInputProps =
  & z.input<typeof DataAwsServerlessapplicationrepositoryApplicationInputSchema>
  & NodeProps

export type DataAwsServerlessapplicationrepositoryApplicationOutputProps =
  & z.output<
    typeof DataAwsServerlessapplicationrepositoryApplicationOutputSchema
  >
  & z.output<
    typeof DataAwsServerlessapplicationrepositoryApplicationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/serverlessapplicationrepository_application

export function DataAwsServerlessapplicationrepositoryApplication(
  props: Partial<DataAwsServerlessapplicationrepositoryApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_serverlessapplicationrepository_application'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServerlessapplicationrepositoryApplicationInputSchema}
      _outputSchema={DataAwsServerlessapplicationrepositoryApplicationOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServerlessapplicationrepositoryApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServerlessapplicationrepositoryApplicationOutputProps>(
    DataAwsServerlessapplicationrepositoryApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServerlessapplicationrepositoryApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServerlessapplicationrepositoryApplicationOutputProps>(
    DataAwsServerlessapplicationrepositoryApplication,
    idFilter,
    baseNode,
    optional,
  )
