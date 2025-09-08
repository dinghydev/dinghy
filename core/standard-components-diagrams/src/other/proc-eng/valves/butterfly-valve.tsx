import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTERFLY_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=butterfly',
  },
  _original_width: 100,
  _original_height: 60,
}

export function ButterflyValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTERFLY_VALVE}
      {...props}
      _style={extendStyle(BUTTERFLY_VALVE, props)}
    />
  )
}
