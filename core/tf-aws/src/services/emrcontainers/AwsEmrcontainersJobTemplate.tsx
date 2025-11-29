import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/emrcontainers_job_template

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  job_template_data: resolvableValue(z.object({
    execution_role_arn: z.string(),
    job_tags: z.record(z.string(), z.string()).optional(),
    release_label: z.string(),
  })),
  kms_key_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEmrcontainersJobTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emrcontainers_job_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrcontainersJobTemplate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEmrcontainersJobTemplate, node, id)

export const useAwsEmrcontainersJobTemplates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEmrcontainersJobTemplate, node, id)
