import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  state: resolvableValue(z.string()),
  image_criterion: resolvableValue(
    z.object({
      image_names: z.string().array().optional(),
      image_providers: z.string().array().optional(),
      marketplace_product_codes: z.string().array().optional(),
      creation_date_condition: z.object({
        maximum_days_since_created: z.number().optional(),
      }).array().optional(),
      deprecation_time_condition: z.object({
        maximum_days_since_deprecated: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_allowed_images_settings

export function AwsEc2AllowedImagesSettings(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_allowed_images_settings'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2AllowedImagesSettingss = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsEc2AllowedImagesSettings, idFilter, baseNode)
