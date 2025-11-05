import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLOBE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=globe',
  },
  _width: 100,
  _height: 60,
}

export function GlobeValve(props: NodeProps) {
  return (
    <Shape
      {...GLOBE_VALVE}
      {...props}
      _style={extendStyle(GLOBE_VALVE, props)}
    />
  )
}
