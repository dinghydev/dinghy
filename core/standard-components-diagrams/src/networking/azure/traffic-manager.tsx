import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAFFIC_MANAGER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.traffic_manager;pointerEvents=1;',
  },
  _width: 60,
  _height: 60,
}

export function TrafficManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRAFFIC_MANAGER}
      {...props}
      _style={extendStyle(TRAFFIC_MANAGER, props)}
    />
  )
}
