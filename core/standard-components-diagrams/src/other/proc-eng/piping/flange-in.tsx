import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLANGE_IN = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.flange_in;pointerEvents=1;',
  _width: 10,
  _height: 20,
}

export function FlangeIn(props: DiagramNodeProps) {
  return <Shape {...FLANGE_IN} {...props} />
}
