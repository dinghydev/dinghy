import { z } from 'zod'

// Genuinely recursive by design - do not inline. See the comment on
// generateWafStatementSchemaFile in dinghy-code-gen's
// src/tf/generate-lib/wafStatementSchema.ts for the full story.
export const WafStatementSchema: z.ZodType<any> = z.lazy(() => (z.object({
  and_statement: z.object({
    statement: WafStatementSchema.array().optional(),
  }).array().optional(),
  asn_match_statement: z.object({
    asn_list: z.number().array(),
    forwarded_ip_config: z.object({
      fallback_behavior: z.string(),
      header_name: z.string(),
    }).array().optional(),
  }).array().optional(),
  byte_match_statement: z.object({
    positional_constraint: z.string(),
    search_string: z.string(),
    field_to_match: z.object({
      all_query_arguments: z.object({}).array().optional(),
      body: z.object({
        oversize_handling: z.string().optional(),
      }).array().optional(),
      cookies: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_cookies: z.string().array().optional(),
          included_cookies: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      header_order: z.object({
        oversize_handling: z.string(),
      }).array().optional(),
      headers: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_headers: z.string().array().optional(),
          included_headers: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      ja3_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      ja4_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      json_body: z.object({
        invalid_fallback_behavior: z.string().optional(),
        match_scope: z.string(),
        oversize_handling: z.string().optional(),
        match_pattern: z.object({
          included_paths: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      method: z.object({}).array().optional(),
      query_string: z.object({}).array().optional(),
      single_header: z.object({
        name: z.string(),
      }).array().optional(),
      single_query_argument: z.object({
        name: z.string(),
      }).array().optional(),
      uri_fragment: z.object({
        fallback_behavior: z.string().optional(),
      }).array().optional(),
      uri_path: z.object({}).array().optional(),
    }).array().optional(),
    text_transformation: z.object({
      priority: z.number(),
      type: z.string(),
    }).array().optional(),
  }).array().optional(),
  geo_match_statement: z.object({
    country_codes: z.string().array(),
    forwarded_ip_config: z.object({
      fallback_behavior: z.string(),
      header_name: z.string(),
    }).array().optional(),
  }).array().optional(),
  ip_set_reference_statement: z.object({
    arn: z.string(),
    ip_set_forwarded_ip_config: z.object({
      fallback_behavior: z.string(),
      header_name: z.string(),
      position: z.string(),
    }).array().optional(),
  }).array().optional(),
  label_match_statement: z.object({
    key: z.string(),
    scope: z.string(),
  }).array().optional(),
  managed_rule_group_statement: z.object({
    name: z.string(),
    vendor_name: z.string(),
    version: z.string().optional(),
    managed_rule_group_configs: z.object({
      login_path: z.string().optional(),
      payload_type: z.string().optional(),
      aws_managed_rules_acfp_rule_set: z.object({
        creation_path: z.string(),
        enable_regex_in_path: z.boolean().optional(),
        registration_page_path: z.string(),
        request_inspection: z.object({
          payload_type: z.string(),
          address_fields: z.object({
            identifiers: z.string().array(),
          }).array().optional(),
          email_field: z.object({
            identifier: z.string(),
          }).array().optional(),
          password_field: z.object({
            identifier: z.string(),
          }).array().optional(),
          phone_number_fields: z.object({
            identifiers: z.string().array(),
          }).array().optional(),
          username_field: z.object({
            identifier: z.string(),
          }).array().optional(),
        }).array().optional(),
        response_inspection: z.object({
          body_contains: z.object({
            failure_strings: z.string().array(),
            success_strings: z.string().array(),
          }).array().optional(),
          header: z.object({
            failure_values: z.string().array(),
            name: z.string(),
            success_values: z.string().array(),
          }).array().optional(),
          json: z.object({
            failure_values: z.string().array(),
            identifier: z.string(),
            success_values: z.string().array(),
          }).array().optional(),
          status_code: z.object({
            failure_codes: z.number().array(),
            success_codes: z.number().array(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      aws_managed_rules_anti_ddos_rule_set: z.object({
        sensitivity_to_block: z.string().optional(),
        client_side_action_config: z.object({
          challenge: z.object({
            sensitivity: z.string().optional(),
            usage_of_action: z.string(),
            exempt_uri_regular_expression: z.object({
              regex_string: z.string().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      aws_managed_rules_atp_rule_set: z.object({
        enable_regex_in_path: z.boolean().optional(),
        login_path: z.string(),
        request_inspection: z.object({
          payload_type: z.string(),
          password_field: z.object({
            identifier: z.string(),
          }).array().optional(),
          username_field: z.object({
            identifier: z.string(),
          }).array().optional(),
        }).array().optional(),
        response_inspection: z.object({
          body_contains: z.object({
            failure_strings: z.string().array(),
            success_strings: z.string().array(),
          }).array().optional(),
          header: z.object({
            failure_values: z.string().array(),
            name: z.string(),
            success_values: z.string().array(),
          }).array().optional(),
          json: z.object({
            failure_values: z.string().array(),
            identifier: z.string(),
            success_values: z.string().array(),
          }).array().optional(),
          status_code: z.object({
            failure_codes: z.number().array(),
            success_codes: z.number().array(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      aws_managed_rules_bot_control_rule_set: z.object({
        enable_machine_learning: z.boolean().optional(),
        inspection_level: z.string(),
      }).array().optional(),
      password_field: z.object({
        identifier: z.string(),
      }).array().optional(),
      username_field: z.object({
        identifier: z.string(),
      }).array().optional(),
    }).array().optional(),
    rule_action_override: z.object({
      name: z.string(),
      action_to_use: z.object({
        allow: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        block: z.object({
          custom_response: z.object({
            custom_response_body_key: z.string().optional(),
            response_code: z.number(),
            response_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        captcha: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        challenge: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        count: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
    scope_down_statement: z.object({
      asn_match_statement: z.object({
        asn_list: z.number().array(),
        forwarded_ip_config: z.object({
          fallback_behavior: z.string(),
          header_name: z.string(),
        }).array().optional(),
      }).array().optional(),
      byte_match_statement: z.object({
        positional_constraint: z.string(),
        search_string: z.string(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      geo_match_statement: z.object({
        country_codes: z.string().array(),
        forwarded_ip_config: z.object({
          fallback_behavior: z.string(),
          header_name: z.string(),
        }).array().optional(),
      }).array().optional(),
      ip_set_reference_statement: z.object({
        arn: z.string(),
        ip_set_forwarded_ip_config: z.object({
          fallback_behavior: z.string(),
          header_name: z.string(),
          position: z.string(),
        }).array().optional(),
      }).array().optional(),
      label_match_statement: z.object({
        key: z.string(),
        scope: z.string(),
      }).array().optional(),
      regex_match_statement: z.object({
        regex_string: z.string(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      regex_pattern_set_reference_statement: z.object({
        arn: z.string(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      size_constraint_statement: z.object({
        comparison_operator: z.string(),
        size: z.number(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      sqli_match_statement: z.object({
        sensitivity_level: z.string().optional(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      xss_match_statement: z.object({
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  }).array().optional(),
  not_statement: z.object({
    statement: WafStatementSchema.array().optional(),
  }).array().optional(),
  or_statement: z.object({
    statement: WafStatementSchema.array().optional(),
  }).array().optional(),
  rate_based_statement: z.object({
    aggregate_key_type: z.string(),
    evaluation_window_sec: z.number().optional(),
    limit: z.number(),
    custom_keys: z.object({
      asn: z.object({}).array().optional(),
      cookie: z.object({
        name: z.string(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      forwarded_ip: z.object({}).array().optional(),
      header: z.object({
        name: z.string(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      http_method: z.object({}).array().optional(),
      ip: z.object({}).array().optional(),
      ja3_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      ja4_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      label_namespace: z.object({
        namespace: z.string(),
      }).array().optional(),
      query_argument: z.object({
        name: z.string(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      query_string: z.object({
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      uri_path: z.object({
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
    forwarded_ip_config: z.object({
      fallback_behavior: z.string(),
      header_name: z.string(),
    }).array().optional(),
    scope_down_statement: z.object({
      asn_match_statement: z.object({
        asn_list: z.number().array(),
        forwarded_ip_config: z.object({
          fallback_behavior: z.string(),
          header_name: z.string(),
        }).array().optional(),
      }).array().optional(),
      byte_match_statement: z.object({
        positional_constraint: z.string(),
        search_string: z.string(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      geo_match_statement: z.object({
        country_codes: z.string().array(),
        forwarded_ip_config: z.object({
          fallback_behavior: z.string(),
          header_name: z.string(),
        }).array().optional(),
      }).array().optional(),
      ip_set_reference_statement: z.object({
        arn: z.string(),
        ip_set_forwarded_ip_config: z.object({
          fallback_behavior: z.string(),
          header_name: z.string(),
          position: z.string(),
        }).array().optional(),
      }).array().optional(),
      label_match_statement: z.object({
        key: z.string(),
        scope: z.string(),
      }).array().optional(),
      regex_match_statement: z.object({
        regex_string: z.string(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      regex_pattern_set_reference_statement: z.object({
        arn: z.string(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      size_constraint_statement: z.object({
        comparison_operator: z.string(),
        size: z.number(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      sqli_match_statement: z.object({
        sensitivity_level: z.string().optional(),
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
      xss_match_statement: z.object({
        field_to_match: z.object({
          all_query_arguments: z.object({}).array().optional(),
          body: z.object({
            oversize_handling: z.string().optional(),
          }).array().optional(),
          cookies: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_cookies: z.string().array().optional(),
              included_cookies: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          header_order: z.object({
            oversize_handling: z.string(),
          }).array().optional(),
          headers: z.object({
            match_scope: z.string(),
            oversize_handling: z.string(),
            match_pattern: z.object({
              excluded_headers: z.string().array().optional(),
              included_headers: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          ja3_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          ja4_fingerprint: z.object({
            fallback_behavior: z.string(),
          }).array().optional(),
          json_body: z.object({
            invalid_fallback_behavior: z.string().optional(),
            match_scope: z.string(),
            oversize_handling: z.string().optional(),
            match_pattern: z.object({
              included_paths: z.string().array().optional(),
              all: z.object({}).array().optional(),
            }).array().optional(),
          }).array().optional(),
          method: z.object({}).array().optional(),
          query_string: z.object({}).array().optional(),
          single_header: z.object({
            name: z.string(),
          }).array().optional(),
          single_query_argument: z.object({
            name: z.string(),
          }).array().optional(),
          uri_fragment: z.object({
            fallback_behavior: z.string().optional(),
          }).array().optional(),
          uri_path: z.object({}).array().optional(),
        }).array().optional(),
        text_transformation: z.object({
          priority: z.number(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  }).array().optional(),
  regex_match_statement: z.object({
    regex_string: z.string(),
    field_to_match: z.object({
      all_query_arguments: z.object({}).array().optional(),
      body: z.object({
        oversize_handling: z.string().optional(),
      }).array().optional(),
      cookies: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_cookies: z.string().array().optional(),
          included_cookies: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      header_order: z.object({
        oversize_handling: z.string(),
      }).array().optional(),
      headers: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_headers: z.string().array().optional(),
          included_headers: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      ja3_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      ja4_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      json_body: z.object({
        invalid_fallback_behavior: z.string().optional(),
        match_scope: z.string(),
        oversize_handling: z.string().optional(),
        match_pattern: z.object({
          included_paths: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      method: z.object({}).array().optional(),
      query_string: z.object({}).array().optional(),
      single_header: z.object({
        name: z.string(),
      }).array().optional(),
      single_query_argument: z.object({
        name: z.string(),
      }).array().optional(),
      uri_fragment: z.object({
        fallback_behavior: z.string().optional(),
      }).array().optional(),
      uri_path: z.object({}).array().optional(),
    }).array().optional(),
    text_transformation: z.object({
      priority: z.number(),
      type: z.string(),
    }).array().optional(),
  }).array().optional(),
  regex_pattern_set_reference_statement: z.object({
    arn: z.string(),
    field_to_match: z.object({
      all_query_arguments: z.object({}).array().optional(),
      body: z.object({
        oversize_handling: z.string().optional(),
      }).array().optional(),
      cookies: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_cookies: z.string().array().optional(),
          included_cookies: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      header_order: z.object({
        oversize_handling: z.string(),
      }).array().optional(),
      headers: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_headers: z.string().array().optional(),
          included_headers: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      ja3_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      ja4_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      json_body: z.object({
        invalid_fallback_behavior: z.string().optional(),
        match_scope: z.string(),
        oversize_handling: z.string().optional(),
        match_pattern: z.object({
          included_paths: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      method: z.object({}).array().optional(),
      query_string: z.object({}).array().optional(),
      single_header: z.object({
        name: z.string(),
      }).array().optional(),
      single_query_argument: z.object({
        name: z.string(),
      }).array().optional(),
      uri_fragment: z.object({
        fallback_behavior: z.string().optional(),
      }).array().optional(),
      uri_path: z.object({}).array().optional(),
    }).array().optional(),
    text_transformation: z.object({
      priority: z.number(),
      type: z.string(),
    }).array().optional(),
  }).array().optional(),
  rule_group_reference_statement: z.object({
    arn: z.string(),
    excluded_rule: z.object({
      name: z.string(),
    }).array().optional(),
    rule_action_override: z.object({
      name: z.string(),
      action_to_use: z.object({
        allow: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        block: z.object({
          custom_response: z.object({
            custom_response_body_key: z.string().optional(),
            response_code: z.number(),
            response_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        captcha: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        challenge: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        count: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  }).array().optional(),
  size_constraint_statement: z.object({
    comparison_operator: z.string(),
    size: z.number(),
    field_to_match: z.object({
      all_query_arguments: z.object({}).array().optional(),
      body: z.object({
        oversize_handling: z.string().optional(),
      }).array().optional(),
      cookies: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_cookies: z.string().array().optional(),
          included_cookies: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      header_order: z.object({
        oversize_handling: z.string(),
      }).array().optional(),
      headers: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_headers: z.string().array().optional(),
          included_headers: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      ja3_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      ja4_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      json_body: z.object({
        invalid_fallback_behavior: z.string().optional(),
        match_scope: z.string(),
        oversize_handling: z.string().optional(),
        match_pattern: z.object({
          included_paths: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      method: z.object({}).array().optional(),
      query_string: z.object({}).array().optional(),
      single_header: z.object({
        name: z.string(),
      }).array().optional(),
      single_query_argument: z.object({
        name: z.string(),
      }).array().optional(),
      uri_fragment: z.object({
        fallback_behavior: z.string().optional(),
      }).array().optional(),
      uri_path: z.object({}).array().optional(),
    }).array().optional(),
    text_transformation: z.object({
      priority: z.number(),
      type: z.string(),
    }).array().optional(),
  }).array().optional(),
  sqli_match_statement: z.object({
    sensitivity_level: z.string().optional(),
    field_to_match: z.object({
      all_query_arguments: z.object({}).array().optional(),
      body: z.object({
        oversize_handling: z.string().optional(),
      }).array().optional(),
      cookies: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_cookies: z.string().array().optional(),
          included_cookies: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      header_order: z.object({
        oversize_handling: z.string(),
      }).array().optional(),
      headers: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_headers: z.string().array().optional(),
          included_headers: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      ja3_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      ja4_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      json_body: z.object({
        invalid_fallback_behavior: z.string().optional(),
        match_scope: z.string(),
        oversize_handling: z.string().optional(),
        match_pattern: z.object({
          included_paths: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      method: z.object({}).array().optional(),
      query_string: z.object({}).array().optional(),
      single_header: z.object({
        name: z.string(),
      }).array().optional(),
      single_query_argument: z.object({
        name: z.string(),
      }).array().optional(),
      uri_fragment: z.object({
        fallback_behavior: z.string().optional(),
      }).array().optional(),
      uri_path: z.object({}).array().optional(),
    }).array().optional(),
    text_transformation: z.object({
      priority: z.number(),
      type: z.string(),
    }).array().optional(),
  }).array().optional(),
  xss_match_statement: z.object({
    field_to_match: z.object({
      all_query_arguments: z.object({}).array().optional(),
      body: z.object({
        oversize_handling: z.string().optional(),
      }).array().optional(),
      cookies: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_cookies: z.string().array().optional(),
          included_cookies: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      header_order: z.object({
        oversize_handling: z.string(),
      }).array().optional(),
      headers: z.object({
        match_scope: z.string(),
        oversize_handling: z.string(),
        match_pattern: z.object({
          excluded_headers: z.string().array().optional(),
          included_headers: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      ja3_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      ja4_fingerprint: z.object({
        fallback_behavior: z.string(),
      }).array().optional(),
      json_body: z.object({
        invalid_fallback_behavior: z.string().optional(),
        match_scope: z.string(),
        oversize_handling: z.string().optional(),
        match_pattern: z.object({
          included_paths: z.string().array().optional(),
          all: z.object({}).array().optional(),
        }).array().optional(),
      }).array().optional(),
      method: z.object({}).array().optional(),
      query_string: z.object({}).array().optional(),
      single_header: z.object({
        name: z.string(),
      }).array().optional(),
      single_query_argument: z.object({
        name: z.string(),
      }).array().optional(),
      uri_fragment: z.object({
        fallback_behavior: z.string().optional(),
      }).array().optional(),
      uri_path: z.object({}).array().optional(),
    }).array().optional(),
    text_transformation: z.object({
      priority: z.number(),
      type: z.string(),
    }).array().optional(),
  }).array().optional(),
})))
