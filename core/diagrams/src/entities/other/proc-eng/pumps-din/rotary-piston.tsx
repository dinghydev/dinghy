import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROTARY_PISTON = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.rotary_piston;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function RotaryPiston(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROTARY_PISTON)} />
}
