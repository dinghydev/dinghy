import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsQuicksightTheme } from './AwsQuicksightTheme.tsx'

export const InputSchema = z.object({
  theme_id: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  base_theme_id: z.string().optional(),
  configuration: z.object({
    data_color_palette: z.object({
      colors: z.string().array(),
      empty_fill_color: z.string(),
      min_max_gradient: z.string().array(),
    }).array(),
    sheet: z.object({
      tile: z.object({
        border: z.object({
          show: z.boolean(),
        }).array(),
      }).array(),
      tile_layout: z.object({
        gutter: z.object({
          show: z.boolean(),
        }).array(),
        margin: z.object({
          show: z.boolean(),
        }).array(),
      }).array(),
    }).array(),
    typography: z.object({
      font_families: z.object({
        font_family: z.string(),
      }).array(),
    }).array(),
    ui_color_palette: z.object({
      accent: z.string(),
      accent_foreground: z.string(),
      danger: z.string(),
      danger_foreground: z.string(),
      dimension: z.string(),
      dimension_foreground: z.string(),
      measure: z.string(),
      measure_foreground: z.string(),
      primary_background: z.string(),
      primary_foreground: z.string(),
      secondary_background: z.string(),
      secondary_foreground: z.string(),
      success: z.string(),
      success_foreground: z.string(),
      warning: z.string(),
      warning_foreground: z.string(),
    }).array(),
  }).array().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  name: z.string().optional(),
  permissions: z.object({
    actions: z.set(z.string()),
    principal: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  version_description: z.string().optional(),
  version_number: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/quicksight_theme

export function DataAwsQuicksightTheme(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsQuicksightTheme
      _type='aws_quicksight_theme'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsQuicksightTheme = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsQuicksightTheme, idFilter, baseNode)

export const useDataAwsQuicksightThemes = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsQuicksightTheme, idFilter, baseNode)
