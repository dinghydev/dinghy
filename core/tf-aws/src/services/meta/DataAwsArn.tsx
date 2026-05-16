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

export const DataAwsArnInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsArnOutputSchema = z.object({
  account: z.string().optional(),
  partition: z.string().optional(),
  region: z.string().optional(),
  resource: z.string().optional(),
  service: z.string().optional(),
})

export type DataAwsArnInputProps =
  & z.input<typeof DataAwsArnInputSchema>
  & NodeProps

export type DataAwsArnOutputProps =
  & z.output<typeof DataAwsArnOutputSchema>
  & z.output<typeof DataAwsArnInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/arn

export function DataAwsArn(props: Partial<DataAwsArnInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_arn'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsArnInputSchema}
      _outputSchema={DataAwsArnOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsArn = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsArnOutputProps>(DataAwsArn, idFilter, baseNode, optional)

export const useDataAwsArns = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsArnOutputProps>(DataAwsArn, idFilter, baseNode, optional)
