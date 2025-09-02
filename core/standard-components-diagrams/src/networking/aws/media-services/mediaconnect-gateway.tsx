import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIACONNECT_GATEWAY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.mediaconnect_gateway;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function MediaconnectGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIACONNECT_GATEWAY}
      {...props}
      _style={extendStyle(MEDIACONNECT_GATEWAY, props)}
    />
  )
}
