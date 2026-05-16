import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsEc2AllowedImagesSettingsInputSchema = TfMetaSchema.extend({
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
})

export const AwsEc2AllowedImagesSettingsOutputSchema = z.object({})

export type AwsEc2AllowedImagesSettingsInputProps =
  & z.input<typeof AwsEc2AllowedImagesSettingsInputSchema>
  & NodeProps

export type AwsEc2AllowedImagesSettingsOutputProps =
  & z.output<typeof AwsEc2AllowedImagesSettingsOutputSchema>
  & z.output<typeof AwsEc2AllowedImagesSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_allowed_images_settings

export function AwsEc2AllowedImagesSettings(
  props: Partial<AwsEc2AllowedImagesSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_allowed_images_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2AllowedImagesSettingsInputSchema}
      _outputSchema={AwsEc2AllowedImagesSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2AllowedImagesSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2AllowedImagesSettingsOutputProps>(
    AwsEc2AllowedImagesSettings,
    idFilter,
    baseNode,
    optional,
  )
