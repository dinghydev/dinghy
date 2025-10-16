import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRAFFIC_MANAGER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.traffic_manager;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 50,
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
