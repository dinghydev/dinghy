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

export const AwsSagemakerModelPackageGroupInputSchema = TfMetaSchema.extend({
  model_package_group_name: resolvableValue(z.string()),
  model_package_group_description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSagemakerModelPackageGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerModelPackageGroupInputProps =
  & z.input<typeof AwsSagemakerModelPackageGroupInputSchema>
  & NodeProps

export type AwsSagemakerModelPackageGroupOutputProps =
  & z.output<typeof AwsSagemakerModelPackageGroupOutputSchema>
  & z.output<typeof AwsSagemakerModelPackageGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_model_package_group

export function AwsSagemakerModelPackageGroup(
  props: Partial<AwsSagemakerModelPackageGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_model_package_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerModelPackageGroupInputSchema}
      _outputSchema={AwsSagemakerModelPackageGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerModelPackageGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerModelPackageGroupOutputProps>(
    AwsSagemakerModelPackageGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerModelPackageGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerModelPackageGroupOutputProps>(
    AwsSagemakerModelPackageGroup,
    idFilter,
    baseNode,
    optional,
  )
