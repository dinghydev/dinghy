import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUBMERSIBLE_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.submersible_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 103,
  _height: 74,
}

export function SubmersiblePump(props: NodeProps) {
  return (
    <Shape
      {...SUBMERSIBLE_PUMP}
      {...props}
      _style={extendStyle(SUBMERSIBLE_PUMP, props)}
    />
  )
}
