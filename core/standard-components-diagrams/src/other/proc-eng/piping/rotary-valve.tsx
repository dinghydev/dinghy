import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROTARY_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.rotary_valve;pointerEvents=1;',
  _width: 50,
  _height: 20,
}

export function RotaryValve(props: DiagramNodeProps) {
  return <Shape {...ROTARY_VALVE} {...props} />
}
