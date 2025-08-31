import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_GATEWAY = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_device_gateway;',
  _width: 78,
  _height: 73,
}

export function DeviceGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_GATEWAY}
      {...props}
      _style={extendStyle(DEVICE_GATEWAY, props)}
    />
  )
}
