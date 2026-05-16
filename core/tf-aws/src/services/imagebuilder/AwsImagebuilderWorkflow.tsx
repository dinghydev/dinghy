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

export const AwsImagebuilderWorkflowInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  version: resolvableValue(z.string()),
  change_description: resolvableValue(z.string().optional()),
  data: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  uri: resolvableValue(z.string().optional()),
})

export const AwsImagebuilderWorkflowOutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
})

export const AwsImagebuilderWorkflowImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsImagebuilderWorkflowInputProps =
  & z.input<typeof AwsImagebuilderWorkflowInputSchema>
  & z.input<typeof AwsImagebuilderWorkflowImportSchema>
  & NodeProps

export type AwsImagebuilderWorkflowOutputProps =
  & z.output<typeof AwsImagebuilderWorkflowOutputSchema>
  & z.output<typeof AwsImagebuilderWorkflowInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/imagebuilder_workflow

export function AwsImagebuilderWorkflow(
  props: Partial<AwsImagebuilderWorkflowInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_workflow'
      _category='resource'
      _title={_title}
      _inputSchema={AwsImagebuilderWorkflowInputSchema}
      _outputSchema={AwsImagebuilderWorkflowOutputSchema}
      _importSchema={AwsImagebuilderWorkflowImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderWorkflow = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsImagebuilderWorkflowOutputProps>(
    AwsImagebuilderWorkflow,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderWorkflows = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsImagebuilderWorkflowOutputProps>(
    AwsImagebuilderWorkflow,
    idFilter,
    baseNode,
    optional,
  )
