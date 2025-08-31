import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AWS_APPLICATION_DISCOVERY_SERVICE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.application_discovery_service;',
  _width: 80,
  _height: 135,
}

export function AwsApplicationDiscoveryService(props: DiagramNodeProps) {
  return (
    <Shape
      {...AWS_APPLICATION_DISCOVERY_SERVICE}
      {...props}
      _style={extendStyle(AWS_APPLICATION_DISCOVERY_SERVICE, props)}
    />
  )
}
