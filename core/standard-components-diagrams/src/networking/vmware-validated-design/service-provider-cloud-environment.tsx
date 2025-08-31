import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_PROVIDER_CLOUD_ENVIRONMENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.service_provider_cloud_environment;',
  _width: 50,
  _height: 44,
}

export function ServiceProviderCloudEnvironment(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_PROVIDER_CLOUD_ENVIRONMENT}
      {...props}
      _style={extendStyle(SERVICE_PROVIDER_CLOUD_ENVIRONMENT, props)}
    />
  )
}
