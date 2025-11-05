import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROTARY_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.rotary_valve;pointerEvents=1;',
  },
  _width: 50,
  _height: 20,
}

export function RotaryValve(props: NodeProps) {
  return (
    <Shape
      {...ROTARY_VALVE}
      {...props}
      _style={extendStyle(ROTARY_VALVE, props)}
    />
  )
}
