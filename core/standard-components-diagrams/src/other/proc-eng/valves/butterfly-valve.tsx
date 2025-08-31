import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTERFLY_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=butterfly',
  _width: 100,
  _height: 60,
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
