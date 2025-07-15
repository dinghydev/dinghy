import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGITATOR_ANCHOR = {
  _style:
    'shape=mxgraph.pid.agitators.agitator_(anchor);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 120,
}

export function AgitatorAnchor(props: DiagramNodeProps) {
  return <Shape {...AGITATOR_ANCHOR} {...props} />
}
