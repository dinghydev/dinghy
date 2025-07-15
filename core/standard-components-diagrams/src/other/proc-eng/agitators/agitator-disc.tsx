import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGITATOR_DISC = {
  _style:
    'shape=mxgraph.pid.agitators.agitator_(disc);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 135,
}

export function AgitatorDisc(props: DiagramNodeProps) {
  return <Shape {...AGITATOR_DISC} {...props} />
}
