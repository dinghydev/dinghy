import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSPORT_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.transport_service;',
  },
  _original_width: 21,
  _original_height: 21,
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
