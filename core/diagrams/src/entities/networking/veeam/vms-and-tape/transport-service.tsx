import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSPORT_SERVICE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.transport_service;pointerEvents=1;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function TransportService(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSPORT_SERVICE}
      {...props}
      _style={extendStyle(TRANSPORT_SERVICE, props)}
    />
  )
}
