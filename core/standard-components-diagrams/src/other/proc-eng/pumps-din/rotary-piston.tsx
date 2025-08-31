import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROTARY_PISTON = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.rotary_piston;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function RotaryPiston(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROTARY_PISTON}
      {...props}
      _style={extendStyle(ROTARY_PISTON, props)}
    />
  )
}
