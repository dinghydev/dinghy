import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NEEDLE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=needle',
  },
  _width: 100,
  _height: 60,
}

export function NeedleValve(props: NodeProps) {
  return (
    <Shape
      {...NEEDLE_VALVE}
      {...props}
      _style={extendStyle(NEEDLE_VALVE, props)}
    />
  )
}
