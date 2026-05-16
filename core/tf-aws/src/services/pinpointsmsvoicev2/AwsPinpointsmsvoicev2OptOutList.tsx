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

export const AwsPinpointsmsvoicev2OptOutListInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsPinpointsmsvoicev2OptOutListOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsPinpointsmsvoicev2OptOutListInputProps =
  & z.input<typeof AwsPinpointsmsvoicev2OptOutListInputSchema>
  & NodeProps

export type AwsPinpointsmsvoicev2OptOutListOutputProps =
  & z.output<typeof AwsPinpointsmsvoicev2OptOutListOutputSchema>
  & z.output<typeof AwsPinpointsmsvoicev2OptOutListInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpointsmsvoicev2_opt_out_list

export function AwsPinpointsmsvoicev2OptOutList(
  props: Partial<AwsPinpointsmsvoicev2OptOutListInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpointsmsvoicev2_opt_out_list'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointsmsvoicev2OptOutListInputSchema}
      _outputSchema={AwsPinpointsmsvoicev2OptOutListOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointsmsvoicev2OptOutList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointsmsvoicev2OptOutListOutputProps>(
    AwsPinpointsmsvoicev2OptOutList,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointsmsvoicev2OptOutLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointsmsvoicev2OptOutListOutputProps>(
    AwsPinpointsmsvoicev2OptOutList,
    idFilter,
    baseNode,
    optional,
  )
