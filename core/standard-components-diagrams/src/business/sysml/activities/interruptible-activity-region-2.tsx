import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERRUPTIBLE_ACTIVITY_REGION_2 = {
  _style: {
    entity:
      'shape=mxgraph.lean_mapping.electronic_info_flow_edge;html=1;edgeStyle=none;align=center;verticalAlign=bottom;exitX=1;exitY=0.5;fillColor=#ffffff;',
  },
  _width: 1,
  _height: 60,
}

export function InterruptibleActivityRegion2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERRUPTIBLE_ACTIVITY_REGION_2}
      {...props}
      _style={extendStyle(INTERRUPTIBLE_ACTIVITY_REGION_2, props)}
    />
  )
}
