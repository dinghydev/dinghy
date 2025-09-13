import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SELF_DRAINING_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=selfDrain',
  },
  _width: 100,
  _height: 60,
}

export function SelfDrainingValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...SELF_DRAINING_VALVE}
      {...props}
      _style={extendStyle(SELF_DRAINING_VALVE, props)}
    />
  )
}
