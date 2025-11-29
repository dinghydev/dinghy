import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_allowed_images_settings

export const InputSchema = z.object({
  state: resolvableValue(z.string()),
  image_criterion: resolvableValue(
    z.object({
      image_names: z.string().array().optional(),
      image_providers: z.string().array().optional(),
      marketplace_product_codes: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

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

export const useAwsEc2AllowedImagesSettingss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2AllowedImagesSettings, node, id)
