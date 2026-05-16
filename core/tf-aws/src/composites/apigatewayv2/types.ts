import { getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'
import { AwsApigatewayv2ApiInputSchema } from '../../services/apigatewayv2/AwsApigatewayv2Api.tsx'
import { AwsApigatewayv2RouteInputSchema } from '../../services/apigatewayv2/AwsApigatewayv2Route.tsx'

const RouteSchema = AwsApigatewayv2RouteInputSchema.extend({
  // composite-specific: identifies the Lambda target for the AWS_PROXY
  // integration this composite generates per route.
  lambda: z.string(),
  // belongs to AwsApigatewayv2Integration; carried at route level for
  // ergonomics since the composite owns the integration.
  payload_format_version: z.string().default('2.0'),
})

const HttpApiSchema = AwsApigatewayv2ApiInputSchema.extend({
  // override the underlying schema's required field with a sensible default.
  protocol_type: z.string().default('HTTP'),
  // composite-specific: stage settings (this composite always creates a
  // single stage per api) and routes map.
  stage_name: z.string().default('$default'),
  auto_deploy: z.boolean().default(true),
  routes: z.record(z.string(), RouteSchema.loose().partial()),
})

const HttpApisSchema = z.record(z.string(), HttpApiSchema.loose().partial())

export type HttpApiRouteType = z.output<typeof RouteSchema>
export type HttpApiType = z.output<typeof HttpApiSchema> & { name: string }

export function parseHttpApis(
  apis?: any,
): Record<string, HttpApiType> {
  const renderOptions = getRenderOptions()
  const cfg = apis || (renderOptions as any).httpApis
  if (!cfg) {
    throw new Error('httpApis not configured')
  }
  const parsed = HttpApisSchema.parse(cfg) as Record<string, any>
  for (const [name, api] of Object.entries(parsed)) {
    api.name ??= name
  }
  return parsed as Record<string, HttpApiType>
}
