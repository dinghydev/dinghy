import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRESS_PISTON = {
  _style:
    'shape=mxgraph.pid.shaping_machines.press_(piston);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 60,
}

export function PressPiston(props: DiagramNodeProps) {
  return <Shape {...PRESS_PISTON} {...props} />
}
