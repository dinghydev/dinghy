import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_theme

export const InputSchema = z.object({
  base_theme_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  theme_id: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  configuration: resolvableValue(
    z.object({
      data_color_palette: z.object({
        colors: z.string().array().optional(),
        empty_fill_color: z.string().optional(),
        min_max_gradient: z.string().array().optional(),
      }).optional(),
      sheet: z.object({
        tile: z.object({
          border: z.object({
            show: z.boolean().optional(),
          }).optional(),
        }).optional(),
        tile_layout: z.object({
          gutter: z.object({
            show: z.boolean().optional(),
          }).optional(),
          margin: z.object({
            show: z.boolean().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
      typography: z.object({
        font_families: z.object({
          font_family: z.string().optional(),
        }).optional(),
      }).optional(),
      ui_color_palette: z.object({
        accent: z.string().optional(),
        accent_foreground: z.string().optional(),
        danger: z.string().optional(),
        danger_foreground: z.string().optional(),
        dimension: z.string().optional(),
        dimension_foreground: z.string().optional(),
        measure: z.string().optional(),
        measure_foreground: z.string().optional(),
        primary_background: z.string().optional(),
        primary_foreground: z.string().optional(),
        secondary_background: z.string().optional(),
        secondary_foreground: z.string().optional(),
        success: z.string().optional(),
        success_foreground: z.string().optional(),
        warning: z.string().optional(),
        warning_foreground: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  permissions: resolvableValue(
    z.object({
      actions: z.string().array(),
      principal: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  version_description: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version_number: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightTheme(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_theme'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightTheme = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQuicksightTheme, node, id)

export const useAwsQuicksightThemes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightTheme, node, id)
