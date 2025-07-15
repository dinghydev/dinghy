import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLUTCH = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.clutch;pointerEvents=1;',
  _width: 100,
  _height: 20,
}

export function Clutch(props: DiagramNodeProps) {
  return <Shape {...CLUTCH} {...props} />
}
