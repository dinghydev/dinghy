import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGITATOR_IMPELLER = {
  _style:
    'shape=mxgraph.pid.agitators.agitator_(impeller);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 130,
}

export function AgitatorImpeller(props: DiagramNodeProps) {
  return <Shape {...AGITATOR_IMPELLER} {...props} />
}
