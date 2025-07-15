import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAFFIC_MANAGER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.traffic_manager;pointerEvents=1;',
  _width: 50,
  _height: 50,
}

export function TrafficManager(props: DiagramNodeProps) {
  return <Shape {...TRAFFIC_MANAGER} {...props} />
}
