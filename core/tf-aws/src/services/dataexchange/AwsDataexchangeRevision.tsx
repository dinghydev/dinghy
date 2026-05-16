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

export const AwsDataexchangeRevisionInputSchema = TfMetaSchema.extend({
  data_set_id: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDataexchangeRevisionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  revision_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDataexchangeRevisionInputProps =
  & z.input<typeof AwsDataexchangeRevisionInputSchema>
  & NodeProps

export type AwsDataexchangeRevisionOutputProps =
  & z.output<typeof AwsDataexchangeRevisionOutputSchema>
  & z.output<typeof AwsDataexchangeRevisionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dataexchange_revision

export function AwsDataexchangeRevision(
  props: Partial<AwsDataexchangeRevisionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dataexchange_revision'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDataexchangeRevisionInputSchema}
      _outputSchema={AwsDataexchangeRevisionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDataexchangeRevision = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDataexchangeRevisionOutputProps>(
    AwsDataexchangeRevision,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDataexchangeRevisions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDataexchangeRevisionOutputProps>(
    AwsDataexchangeRevision,
    idFilter,
    baseNode,
    optional,
  )
