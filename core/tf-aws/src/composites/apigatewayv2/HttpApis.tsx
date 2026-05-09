import {
  deepResolve,
  type NodeProps,
  Shape,
  toId,
} from '@dinghy/base-components'
import { Output } from '@dinghy/tf-common'
import { AwsApigatewayv2Api } from '../../services/apigatewayv2/AwsApigatewayv2Api.tsx'
import {
  AwsApigatewayv2Integration,
  useAwsApigatewayv2Integration,
} from '../../services/apigatewayv2/AwsApigatewayv2Integration.tsx'
import { AwsApigatewayv2Route } from '../../services/apigatewayv2/AwsApigatewayv2Route.tsx'
import { AwsApigatewayv2Stage } from '../../services/apigatewayv2/AwsApigatewayv2Stage.tsx'
import { useAwsApigatewayv2Api } from '../../services/apigatewayv2/AwsApigatewayv2Api.tsx'
import { useAwsLambdaFunction } from '../../services/lambda/AwsLambdaFunction.tsx'
import { AwsLambdaPermission } from '../../services/lambda/AwsLambdaPermission.tsx'
import {
  type HttpApiRouteType,
  type HttpApiType,
  parseHttpApis,
} from './types.ts'

const apiId = (apiName: string) => toId(`awsapigatewayv2api_${apiName}`)
const stageId = (apiName: string) => toId(`awsapigatewayv2stage_${apiName}`)
const integrationId = (apiName: string, routeKey: string) =>
  toId(`awsapigatewayv2integration_${apiName}_${routeKey}`)
const routeId = (apiName: string, routeKey: string) =>
  toId(`awsapigatewayv2route_${apiName}_${routeKey}`)
const permissionId = (apiName: string, routeKey: string) =>
  toId(`awslambdapermission_${apiName}_${routeKey}`)

export function HttpApis(props: NodeProps) {
  const apis = parseHttpApis(props.httpApis as any)
  const _components = props._components
  const HttpApisComponent = _components?.httpApis as typeof Shape ||
    Shape
  const ApiComponent =
    _components?.apigatewayv2Api as typeof AwsApigatewayv2Api ||
    AwsApigatewayv2Api
  const StageComponent =
    _components?.apigatewayv2Stage as typeof AwsApigatewayv2Stage ||
    AwsApigatewayv2Stage
  const IntegrationComponent =
    _components?.apigatewayv2Integration as typeof AwsApigatewayv2Integration ||
    AwsApigatewayv2Integration
  const RouteComponent =
    _components?.apigatewayv2Route as typeof AwsApigatewayv2Route ||
    AwsApigatewayv2Route
  const PermissionComponent =
    _components?.lambdaPermission as typeof AwsLambdaPermission ||
    AwsLambdaPermission
  const RoutesComponent = _components?.routes as typeof Shape || Shape

  function HttpApi({ api }: { api: HttpApiType }) {
    function ApiOutput(props: any) {
      const { apigatewayv2Api } = useAwsApigatewayv2Api()
      const description = () => `Output of ${deepResolve(api.name)}`
      const apiInfo = () => {
        const terraformId = deepResolve(apigatewayv2Api._terraformId)
        return {
          Name: deepResolve(api.name),
          Endpoint: `\${${terraformId}.api_endpoint}`,
        }
      }
      return (
        <Output
          _id={() => `${toId(api.name)}_output`}
          description={description}
          value={() => JSON.stringify(apiInfo())}
          {...props}
        />
      )
    }
    return (
      <ApiComponent
        _id={apiId(api.name)}
        _title={api.name}
        {...api}
      >
        <Stage api={api} />
        <RoutesComponent _title='Routes' _direction='vertical'>
          {Object.entries(api.routes).map(([routeKey, route]) => (
            <HttpApiRoute
              key={routeKey}
              apiName={api.name}
              routeKey={routeKey}
              route={route as any}
            />
          ))}
        </RoutesComponent>
        <ApiOutput />
      </ApiComponent>
    )
  }

  function Stage({ api }: { api: HttpApiType }) {
    const { apigatewayv2Api } = useAwsApigatewayv2Api()
    return (
      <StageComponent
        _id={stageId(api.name)}
        _title='Stage'
        api_id={apigatewayv2Api.id}
        name={api.stage_name}
        auto_deploy={api.auto_deploy}
      />
    )
  }

  function HttpApiRoute(
    { apiName, routeKey, route }: {
      apiName: string
      routeKey: string
      route: HttpApiRouteType
    },
  ) {
    const { apigatewayv2Api } = useAwsApigatewayv2Api()
    const { lambdaFunction } = useAwsLambdaFunction(toId(route.lambda))
    return (
      <IntegrationComponent
        _id={integrationId(apiName, routeKey)}
        _title={routeKey}
        _display='entity'
        api_id={apigatewayv2Api.id}
        integration_type='AWS_PROXY'
        integration_method='POST'
        integration_uri={lambdaFunction.invoke_arn}
        {...route as any}
      >
        <Route apiName={apiName} routeKey={routeKey} route={route} />
        <PermissionComponent
          _id={permissionId(apiName, routeKey)}
          statement_id={`AllowAPIGatewayInvoke-${toId(routeKey)}`}
          action='lambda:InvokeFunction'
          function_name={lambdaFunction.function_name}
          principal='apigateway.amazonaws.com'
          source_arn={() => deepResolve(apigatewayv2Api.execution_arn) + '/*/*'}
        />
      </IntegrationComponent>
    )
  }

  function Route(
    { apiName, routeKey, route }: {
      apiName: string
      routeKey: string
      route: HttpApiRouteType
    },
  ) {
    const { apigatewayv2Api } = useAwsApigatewayv2Api()
    const { apigatewayv2Integration } = useAwsApigatewayv2Integration()
    return (
      <RouteComponent
        _id={routeId(apiName, routeKey)}
        _title={`${apiName} ${routeKey}`}
        api_id={apigatewayv2Api.id}
        route_key={routeKey}
        target={() => 'integrations/' + deepResolve(apigatewayv2Integration.id)}
        authorization_type={route.authorization_type}
        authorizer_id={route.authorizer_id}
      />
    )
  }

  return (
    <HttpApisComponent _title='HTTP APIs' _direction='vertical' {...props}>
      {Object.values(apis).map((api: HttpApiType) => (
        <HttpApi key={api.name} api={api} />
      ))}
      {props.children}
    </HttpApisComponent>
  )
}
