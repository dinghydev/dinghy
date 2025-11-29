import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTO_RECIRCULATION_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.autoRecircValve',
  },
  _width: 100,
  _height: 60,
}

export function AutoRecirculationValve(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, AUTO_RECIRCULATION_VALVE)} />
  )
}
