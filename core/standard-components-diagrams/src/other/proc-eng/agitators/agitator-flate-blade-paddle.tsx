import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGITATOR_FLATE_BLADE_PADDLE = {
  _style:
    'shape=mxgraph.pid.agitators.agitator_(flate-blade_paddle);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 140,
}

export function AgitatorFlateBladePaddle(props: DiagramNodeProps) {
  return <Shape {...AGITATOR_FLATE_BLADE_PADDLE} {...props} />
}
