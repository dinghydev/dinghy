import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRADITIONAL_SERVER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.traditional_server;',
  },
  _original_width: 45,
  _original_height: 78,
}

export function TraditionalServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRADITIONAL_SERVER}
      {...props}
      _style={extendStyle(TRADITIONAL_SERVER, props)}
    />
  )
}
