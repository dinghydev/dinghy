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

export const AwsGlueWorkflowInputSchema = TfMetaSchema.extend({
  default_run_properties: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  max_concurrent_runs: resolvableValue(z.number().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGlueWorkflowOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGlueWorkflowInputProps =
  & z.input<typeof AwsGlueWorkflowInputSchema>
  & NodeProps

export type AwsGlueWorkflowOutputProps =
  & z.output<typeof AwsGlueWorkflowOutputSchema>
  & z.output<typeof AwsGlueWorkflowInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_workflow

export function AwsGlueWorkflow(props: Partial<AwsGlueWorkflowInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_workflow'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueWorkflowInputSchema}
      _outputSchema={AwsGlueWorkflowOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueWorkflow = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueWorkflowOutputProps>(
    AwsGlueWorkflow,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueWorkflows = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueWorkflowOutputProps>(
    AwsGlueWorkflow,
    idFilter,
    baseNode,
    optional,
  )
