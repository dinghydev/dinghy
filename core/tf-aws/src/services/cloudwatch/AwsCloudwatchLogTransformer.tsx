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

export const InputSchema = TfMetaSchema.extend({
  log_group_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  transformer_config: resolvableValue(
    z.object({
      add_keys: z.object({
        entry: z.object({
          key: z.string(),
          overwrite_if_exists: z.boolean().optional(),
          value: z.string(),
        }).array().optional(),
      }).array().optional(),
      copy_value: z.object({
        entry: z.object({
          overwrite_if_exists: z.boolean().optional(),
          source: z.string(),
          target: z.string(),
        }).array().optional(),
      }).array().optional(),
      csv: z.object({
        columns: z.string().array().optional(),
        delimiter: z.string().optional(),
        quote_character: z.string().optional(),
        source: z.string().optional(),
      }).array().optional(),
      date_time_converter: z.object({
        locale: z.string().optional(),
        match_patterns: z.string().array(),
        source: z.string(),
        source_timezone: z.string().optional(),
        target: z.string(),
        target_format: z.string().optional(),
        target_timezone: z.string().optional(),
      }).array().optional(),
      delete_keys: z.object({
        with_keys: z.string().array(),
      }).array().optional(),
      grok: z.object({
        match: z.string(),
        source: z.string().optional(),
      }).array().optional(),
      list_to_map: z.object({
        flatten: z.boolean().optional(),
        flattened_element: z.string().optional(),
        key: z.string(),
        source: z.string(),
        target: z.string().optional(),
        value_key: z.string().optional(),
      }).array().optional(),
      lower_case_string: z.object({
        with_keys: z.string().array(),
      }).array().optional(),
      move_keys: z.object({
        entry: z.object({
          overwrite_if_exists: z.boolean().optional(),
          source: z.string(),
          target: z.string(),
        }).array().optional(),
      }).array().optional(),
      parse_cloudfront: z.object({
        source: z.string().optional(),
      }).array().optional(),
      parse_json: z.object({
        destination: z.string().optional(),
        source: z.string().optional(),
      }).array().optional(),
      parse_key_value: z.object({
        destination: z.string().optional(),
        field_delimiter: z.string().optional(),
        key_prefix: z.string().optional(),
        key_value_delimiter: z.string().optional(),
        non_match_value: z.string().optional(),
        overwrite_if_exists: z.boolean().optional(),
        source: z.string().optional(),
      }).array().optional(),
      parse_postgres: z.object({
        source: z.string().optional(),
      }).array().optional(),
      parse_route53: z.object({
        source: z.string().optional(),
      }).array().optional(),
      parse_to_ocsf: z.object({
        event_source: z.string(),
        ocsf_version: z.string(),
        source: z.string().optional(),
      }).array().optional(),
      parse_vpc: z.object({
        source: z.string().optional(),
      }).array().optional(),
      parse_waf: z.object({
        source: z.string().optional(),
      }).array().optional(),
      rename_keys: z.object({
        entry: z.object({
          key: z.string(),
          overwrite_if_exists: z.boolean().optional(),
          rename_to: z.string(),
        }).array().optional(),
      }).array().optional(),
      split_string: z.object({
        entry: z.object({
          delimiter: z.string(),
          source: z.string(),
        }).array().optional(),
      }).array().optional(),
      substitute_string: z.object({
        entry: z.object({
          from: z.string(),
          source: z.string(),
          to: z.string(),
        }).array().optional(),
      }).array().optional(),
      trim_string: z.object({
        with_keys: z.string().array(),
      }).array().optional(),
      type_converter: z.object({
        entry: z.object({
          key: z.string(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      upper_case_string: z.object({
        with_keys: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  log_group_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudwatch_log_transformer

export function AwsCloudwatchLogTransformer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_transformer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogTransformer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudwatchLogTransformer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogTransformers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudwatchLogTransformer,
    idFilter,
    baseNode,
    optional,
  )
