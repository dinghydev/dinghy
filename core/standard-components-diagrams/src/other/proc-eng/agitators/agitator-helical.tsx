import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGITATOR_HELICAL = {
  _style:
    'shape=mxgraph.pid.agitators.agitator_(helical);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 130,
}

export function AgitatorHelical(props: DiagramNodeProps) {
  return <Shape {...AGITATOR_HELICAL} {...props} />
}
